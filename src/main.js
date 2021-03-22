import ApodImage from './js/apod-service.js';
import MarsImage from './js/mars-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

function getElements(response) {
  if (response.photos[0].img_src) {
    $('.showImage').html(`<img src="${response.photos[0].img_src}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$("#mars-button").click(function(event) {
  event.preventDefault();
  ApodImage.getImage()
    .then(function(response) {
      getElements(response);
    });
});

