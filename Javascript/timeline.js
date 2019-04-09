//
// class timeline {
//
//   let lifeEvents = {
//   {
//     year: '3 Nov 1991',
//     description: 'born into the world',
//     image: '../images/baby.jpg'
//   },
//   {
//     year: '3 Nov 1991',
//     description: 'born into the world',
//     image: '../images/baby.jpg'
//   },
//   {
//     year: '3 Nov 1991',
//     description: 'born into the world',
//     image: '../images/baby.jpg'
//   },
//   {
//     year: '3 Nov 1991',
//     description: 'born into the world',
//     image: '../images/baby.jpg'
//   },
//   {
//     year: '3 Nov 1991',
//     description: 'born into the world',
//     image: '../images/baby.jpg'
//   },
//   {
//     year: '3 Nov 1991',
//     description: 'born into the world',
//     image: '../images/baby.jpg'
//   },
//   {
//     year: '2018',
//     description: 'Started to TA at Le Wagon',
//     image: '../images/baby.jpg'
//   }
// }
//
// let timeLine = section({class: "timeline"}, [
//   ul({id: 'timeline__ul'},[
//     lifeEvents.forEach((event), => {
//       li({class: 'timeline__li'},[
//         div({class: 'timeline__box'},[
//           div({class: 'timeline__box-content'},[
//             div({},[
//               h3({class: 'timeline__box-date', textContent: event.year}),
//               p({textContent: event.description})
//             ]),
//             img ({class: 'timeline__img', src: event.image})
//           ])
//         ])
//       ])
//     })
//   ])
// ])

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
