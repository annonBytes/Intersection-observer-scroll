// Import stylesheets
import './style.css';

// Write Javascript code!
console.log('it works');

const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function callback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    observer.unobserve(terms.lastElementChild);
  }
}


let options = {
  root: terms,
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
observer.observe(terms.lastElementChild);