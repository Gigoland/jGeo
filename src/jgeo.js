 /*
 * @name : jGeo
 * @copyright : Gigoland.com
 * @author : Ilia GUIGOLACHVILI
 * @web : https://gigoland.com
 * @description : ჯავა სკრიპტის ქართული მეთოდები და ელემენტები
 */

Element.prototype.ძებნა_დაღით = function(id) {
  return this.querySelector(`#${id}`);
};

Element.prototype.ძებნა_კლასით = function(className) {
  return this.querySelector(`.${className}`);
};

Element.prototype.ძებნა_სახელით = function(name) {
  return this.querySelector(`[name="${name}"]`);
};

Element.prototype.ძებნა_ტიპით = function(type) {
  return this.querySelector(`[type="${type}"]`);
};

Element.prototype.ძებნა_ატრიბუტით = function(attr, val) {
  return this.querySelector(`[${attr}="${val}"]`);
};

Element.prototype.ყველას_ძებნა_დაღით = function(id) {
  return this.querySelectorAll(`#${id}`);
};

Element.prototype.ყველას_ძებნა_კლასით = function(className) {
  return this.querySelectorAll(`.${className}`);
};

Element.prototype.ყველას_ძებნა_სახელით = function(name) {
  return this.querySelectorAll(`[name="${name}"]`);
};

Element.prototype.ყველას_ძებნა_ტიპით = function(type) {
  return this.querySelectorAll(`[type="${type}"]`);
};

Element.prototype.ყველას_ძებნა_ატრიბუტით = function(attr, val) {
  return this.querySelectorAll(`[${attr}="${val}"]`);
};

Element.prototype.ანახე = function(isEmpty) {
  if (isEmpty === true) {
    this.style.display = '';
  } else {
    this.style.display = 'block';
  }
  return this;
};

Element.prototype.დამალე = function() {
  this.style.display = 'none';
  return this;
};

Element.prototype.ჩართე = function() {
  this.disabled = false;
  this.style.pointerEvents = 'auto';
  this.classList.remove('disabled', 'opacity-25'); // Boostrap-ის კლასები
  return this;
};

Element.prototype.გამორთე = function() {
  this.disabled = true;
  this.style.pointerEvents = 'none';
  this.classList.add('disabled', 'opacity-25'); // Boostrap-ის კლასები
  return this;
};

Element.prototype.ჩასმა = function(val) {
  if (typeof val !== 'undefined') {
    this.innerHTML = val;
    return this;
  }
  return this.innerHTML;
};

Element.prototype.წამატება = function(val) {
  if (typeof val !== 'undefined') {
    this.append(new DOMParser().parseFromString(val, 'text/html').body.firstElementChild);
    return this;
  }
  return this.innerHTML;
};

Element.prototype.წინ_ჩასმა = function(val) {
  if (typeof val !== 'undefined') {
    this.prepend(new DOMParser().parseFromString(val, 'text/html').body.firstElementChild);
    return this;
  }
  return this.innerHTML;
};

Element.prototype.ჩანაცვლება = function(val) {
  if (typeof val !== 'undefined') {
    this.outerHTML = val;
    return this;
  }
  return this.innerHTML;
};

Element.prototype.მიუმატე = function(val) {
  if (typeof val !== 'undefined') {
    if (typeof val === 'number'
     && (typeof this.innerHTML === 'number' || /^-?[0-9]+(?:\.[0-9]+)?$/.test(this.innerHTML.trim()))
    ) {
      this.innerHTML = parseInt(this.innerHTML.trim()) + parseInt(val);
    } else {
      this.innerHTML = this.innerHTML + val;
    }
    return this;
  }
  return this.innerHTML;
};

Element.prototype.გამოაკლე = function(param, val) {
  if (typeof val !== 'undefined') {
    if (typeof val === 'number'
     && (typeof this.innerHTML === 'number' || /^-?[0-9]+(?:\.[0-9]+)?$/.test(this.innerHTML.trim()))
    ) {
      this.innerHTML = parseInt(this.innerHTML.trim()) - parseInt(val);
    } else {
      this.innerHTML = this.innerHTML - val; //@todo
    }
    return this;
  }
  return this.innerHTML;
};

Element.prototype.ატრიბუტი = function(param, val) {
  if (typeof val !== 'undefined') {
    this.setAttribute(param, val);
    return this;
  }
  return this.getAttribute(param);
};

Element.prototype.მონაცემი = function(param, val) {
  if (typeof val !== 'undefined') {
    this.dataset[param] = val;
    return this;
  }
  return this.dataset[param];
};

Element.prototype.მონაცემის_მიმატება = function(param, val) {
  if (typeof val !== 'undefined') {
    if (typeof val === 'number'
     && (typeof this.dataset[param] === 'number' || /^-?[0-9]+(?:\.[0-9]+)?$/.test(this.dataset[param].trim()))
    ) {
      this.dataset[param] = parseInt(this.dataset[param].trim()) + parseInt(val);
    } else {
      this.dataset[param] = this.dataset[param] + val;
    }
    return this;
  }
  return this.dataset[param];
};

Element.prototype.მონაცემის_გამოკლება = function(param, val) {
  if (typeof val !== 'undefined') {
    if (typeof val === 'number'
     && (typeof this.dataset[param] === 'number' || /^-?[0-9]+(?:\.[0-9]+)?$/.test(this.dataset[param].trim()))
    ) {
      this.dataset[param] = parseInt(this.dataset[param].trim()) - parseInt(val);
    } else {
      this.dataset[param] = this.dataset[param] - val; //@todo
    }
    return this;
  }
  return this.dataset[param];
};

Element.prototype.მონაცემები = function() {
  return Object.entries(this.dataset);
};

Element.prototype.თუ_ფუჭი_მონაცემია = function(param) {
  let data = this.dataset[param].trim();
  return typeof data === 'undefined'
      || data === false
      || data === null
      || data === ''
      || data == 0
    ? true
    : false
  ;
};

Element.prototype.თუ_ფუჭი_მნიშვნელობა = function() {
  let value = this.value.trim();
  return typeof value === 'undefined'
      || value === false
      || value === null
      || value === ''
      || value == 0
    ? true
    : false
  ;
};

Element.prototype.hasClass = function(className) {
  return this.classList.contains(className);
}

Element.prototype.კლასის_დამატება = function(className) {
  this.classList.add(className);
  return this;
}

Element.prototype.კლასის_ამოკლება = function(className) {
  this.classList.remove(className);
  return this;
}

Element.prototype.კლასის_გადართვა = function(className) {
  this.classList.toggle(className);
  return this;
}

Element.prototype.ატრიბუტის_წაშლა = function(param) {
  this.removeAttribute(param);
  return this;
};
