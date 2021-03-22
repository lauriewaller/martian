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
  let url = response.hdurl;
  console.log(url);
  $('.apodImage').html(`<img src="${url}">`);
}

function displayMarsImage(response) {
  let url = response.photos[0].img_src;
  console.log(url);
  $('.marsImage').html(`<img src="${url}">`);
}

function displayErrors(error) {
  $('.showErrors').text(`${error}`);
}


$("#mars-button").click(function(event) {
  event.preventDefault();
  ApodImage.getApodImage()
    .then(function(apodResponse) {
      if (apodResponse instanceof Error) {
        throw Error(`Nasa Apod API error: ${apodResponse.message}`);
      }
      displayApodImage(apodResponse);
      return MarsImage.getMarsImage();
    })
    .then(function(marsResponse) {
      if (marsResponse instanceof Error) {
        throw Error(`Nasa Mars API error: ${marsResponse.message}`);
      }
      displayMarsImage(marsResponse);
    })
    .catch(function(error) {
      displayErrors(error.message);
    })
});
