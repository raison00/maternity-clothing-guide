import $ from 'jquery';
import './src/scss/maternity-clothing-guide.scss';

export default {
  start: () => {
    $(document).ready(() => {
      // toggle site nav
      // eslint-disable-next-line no-unused-vars
      $('.ceg-menu-header').click((e) => {
        $('.ceg-menu').toggleClass('expanded');
        $('.ceg-menu-content').scrollTop(0);
      });
    });
    // create a new div element
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'insertedDiv');
    // and give it some content
    const newContent = document.createTextNode('Hi there and greetings!');
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementsByClassName('example-partial');
    if (currentDiv.length) {
      document.body.insertBefore(newDiv, currentDiv[0]);
    }
  },
};
