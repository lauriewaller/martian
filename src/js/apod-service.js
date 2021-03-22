export default class ApodImage {
  static getApodImage() {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
  }
}