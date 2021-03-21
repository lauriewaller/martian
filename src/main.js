import Mars from './js/service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

function getElements(response) {
  if (response.hdurl) {
    $('.showImage').append(`<img src="${response.hdurl}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$("#mars-button").click(function(event) {
  event.preventDefault();
  Mars.getImage()
    .then(function(response) {
      getElements(response);
    });
});

