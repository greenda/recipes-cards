import template from 'html-loader!./template.html';

function SimpleComp() {
 const superCtor = (typeof Reflect === 'object') ? function () {
    return Reflect.construct(HTMLElement, arguments, this.constructor);
  } : function () {
    return HTMLElement.apply(this, arguments) || this;
  };
  const $_ = superCtor.apply(this, arguments);
  $_.nothing = null;
  $_.padding = 0;
  $_.message = '';
  return $_;
}

function connectedCallback() {
  // console.log('%c' + 'connectedCallback 1', 'color: #3fcbff');

  // document.querySelector('.section').appendChild(div);
}

SimpleComp.prototype.connectedCallback = connectedCallback;
SimpleComp.prototype.constructor = SimpleComp;
Object.setPrototypeOf(SimpleComp, HTMLElement);

customElements.define('simple-comp', SimpleComp);

export default SimpleComp;