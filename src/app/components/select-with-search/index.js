class SelectWithSearch extends HTMLElement {
  constructor () {
    super();

    this.isOpen = false;

    const template = document.getElementById("select-with-search");
    const templateContent = template.cloneNode(true).content;

    this.content = templateContent;

    this.setOptions(['Свекла', 'Морковь', 'Мясо'], templateContent);

    const addButton = templateContent.querySelector('.select__add-button');
    // addButton.onclick = this.addOption();
    addButton.addEventListener('click', this.addOption)

    const selectHideButton = templateContent.querySelector('.select__hide-button');
    selectHideButton.addEventListener('click', this.togglePopup);

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent);

    this.hideButton = shadowRoot.querySelector('.select__container'); 
  }

  // TODO отсоединить lister после отсоединения страницы

  setOptions = options => {
    const selectContainer = this.content.querySelector('.select__container');
    selectContainer.innerHTML = null;

    options.forEach(option => {
      const optionNode = document.createElement('div');
      optionNode.className = 'select__option';
      optionNode.innerHTML = option;

      selectContainer.appendChild(optionNode);
    });
  }

  addOption = () => {
    this.text = `text: ${this.getAttribute('id')}`;
    this.dispatchEvent(new CustomEvent('addOption'));
  }

  togglePopup = () => {
    this.hideButton.classList.toggle('hide');
  }
}

customElements.define("select-with-search", SelectWithSearch); // (2)
