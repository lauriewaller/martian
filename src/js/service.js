export default class Mars {
  static getImage() {
    return fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}