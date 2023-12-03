class SelectWithSearch extends HTMLElement {
  constructor () {
    super();

    this.isOpen = false;

    const template = document.getElementById("select-with-search");
    const templateContent = template.cloneNode(true).content;

    this.content = templateContent;
    this.options = [];

    const addButton = templateContent.querySelector('.select__add-button');
    addButton.addEventListener('click', this.addOption)

    const selectHideButton = templateContent.querySelector('.select__hide-button');
    selectHideButton.addEventListener('click', this.togglePopup);

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent);

    this.popup = shadowRoot.querySelector('.select__container');
    this.input = shadowRoot.querySelector('.select__input');
    this.selectContainer = shadowRoot.querySelector('.select__container');

    document.querySelector('html').addEventListener('click', this.handleExternalClick);
  }

  static get observedAttributes() { return ['options']; }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'options') {
      this.setOptions(JSON.parse(newValue), this.popup);
    }
  }

  disconnectedCallback() {
    const addButton = templateContent.querySelector('.select__add-button');
    addButton.removeEventListener('click', this.addOption)

    const selectHideButton = templateContent.querySelector('.select__hide-button');
    selectHideButton.removeEventListener('click', this.togglePopup);
  }

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

  handleExternalClick = event => {
    const target = event.target;

    if (target.id !== this.id || (
      target.classList.contains(/select/)
        && !target.classList.contains('select__hide-button')
      )
    ) {
      this.popup.classList.add('hide');
    }
  }
}

customElements.define("select-with-search", SelectWithSearch); // (2)
