import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import ApodImage from './js/apod-service.js';
import MarsImage from './js/mars-service.js';

// function getElements(response) {
//   if (response.photos[0].img_src) {
//     $('.showImage').html(`<img src="${response.photos[0].img_src}">`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

function displayApodImage(response) {
  let url = response.hdurl
  $('.apodImage').html(`<img src="${url}">`);
}

function displayMarsImage(response) {
  let url = response.photos[0].img_src
  $('.marsImage').html(`<img src="${url}">`);
}

$("#mars-button").click(function(event) {
  event.preventDefault();
  ApodImage.getImage()
    .then(function(response) {
      getElements(response);
    });
});

