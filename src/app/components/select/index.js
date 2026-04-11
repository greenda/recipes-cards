// TODO разобраться, как сделать адрес от app
class Select extends HTMLElement {
  init = options => {
    console.log('%c' + 'init', 'color: #3fcbff');

    this.sortOptions(options);

    // this.selectElement = document.createElement(
    //   .SELECT);
    this.selectElement.setAttribute('tabIndex', this.getAttribute('tabIndex'));

    this.addOptions(this.options);
    this.appendChild(this.selectElement);
  };

  sortOptions = options => {
    this.options = [...options]
      .sort(({ name: name1 }, { name: name2 }) => {
        switch (true) {
          case name1 < name2: return -1;

          case name1 > name2: return 1;

          default: return 0;
        }
      });
  };

  addOptions = options => {
    this.options = options;
    options.forEach(({ id, name }) => {
      const option = document.createElement('option');
      option.value = id; option.innerHTML = name;
      this.selectElement.appendChild(option);
    });
  };
  
  updateOptions = options => { this.removeAllOptions(); this.sortOptions(options); this.addOptions(this.options); };
  
  removeAllOptions = () => { while (this.selectElement.firstChild) { this.selectElement.removeChild(this.selectElement.firstChild); } }; 
}

function connectedCallback () {
  console.log('%c' + 'connectedCallback ' + this.getAttribute('options'), 'color: #3fcbff');
}

function attributeChangedCallback (name, oldVal, newVal) {
  console.log('%c' + 'attributeChangedCallback', 'color: #3fcbff');
}

Select.prototype.connectedCallback = connectedCallback;
Select.prototype.attributeChangedCallback = attributeChangedCallback;

customElements.define('select-with-options', Select);

//# sourceURL=webpack://recipe-cards/./src/app/components/select/index.js?");
