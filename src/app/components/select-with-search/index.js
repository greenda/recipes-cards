class SelectWithSearch extends HTMLElement {
  constructor () {
    super();

    this.isOpen = false;

    const template = document.getElementById("select-with-search");
    const templateContent = template.cloneNode(true).content;

    this.content = templateContent;
    this.options = [];

    // this.setOptions([
    //   { id: 1, label: 'Свекла' },
    //   { id: 2, label: 'Морковь' },
    //   { id: 3, label: 'Мясо' },
    // ], templateContent);

    const addButton = templateContent.querySelector('.select__add-button');
    // addButton.onclick = this.addOption();
    addButton.addEventListener('click', this.addOption)

    const selectHideButton = templateContent.querySelector('.select__hide-button');
    selectHideButton.addEventListener('click', this.togglePopup);

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent);

    this.popup = shadowRoot.querySelector('.select__container');
    this.input = shadowRoot.querySelector('.select__input');
    this.selectContainer = shadowRoot.querySelector('.select__container');
  }

  static get observedAttributes() { return ['options']; }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    if (name === 'options') {
      console.log('%c%s', 'background: cadetblue; padding: 8px;', JSON.stringify(JSON.parse(newValue)));
      this.setOptions(JSON.parse(newValue), this.popup);
    }
  }

  // TODO отсоединить lister после отсоединения страницы

  setOptions = (options, popup) => {
    popup.innerHTML = null;

    options.forEach(option => this.setOption(option, popup));
  }

  setOption = ({ id, label }, popup) => {
    const optionNode = document.createElement('div');
    optionNode.className = 'select__option';
    optionNode.innerHTML = label;
    optionNode.id = id;
    optionNode.addEventListener('click', this.selectOption);

    popup.appendChild(optionNode);

    this.options = [...this.options, { id, label }];
  }

  addOption = () => {
    const newValue = this.input.value;

    if (!newValue || this.options.some(({ label }) => label === newValue)) return;

    this.newOption = this.input.value;

    this.dispatchEvent(new CustomEvent('addOption'));

    if (!this.popup.classList.contains('hide')) {
      this.togglePopup();
    }
  }

  togglePopup = () => {
    this.popup.classList.toggle('hide');
  }

  selectOption = event => {
    this.input.value = event.currentTarget.innerHTML;
    this.togglePopup();
  }
}

customElements.define("select-with-search", SelectWithSearch); // (2)
