const { default: axios } = require("axios");
const placesData = require("../data/places.json");
const adventureData = require("../data/places.json");
const CONSTANTS = require("../constants");
class BucketList {
  constructor() {
    this.places = placesData.map((p) => {
      p.category = "places";
      return p;
    });
    this.adventures = adventureData.map((a) => {
      a.category = "adventure";
      return a;
    });
  }
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  paginate(array, pageNumber, pageSize) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
  randomAll() {
    const response = this.shuffle([...this.places, ...this.adventures]);
    return response[Math.floor(Math.random() * response.length)];
  }
  randomPlace() {
    return this.places[Math.floor(Math.random() * this.places.length)];
  }
  randomAdventure() {
    return this.adventures[Math.floor(Math.random() * this.adventures.length)];
  }
  all(page = 1, pageSize = CONSTANTS.PAGE_SIZE) {
    const response = [...this.places, ...this.adventures];
    return this.paginate(response, page, pageSize);
  }
  allPlaces(page = 1, pageSize = CONSTANTS.PAGE_SIZE) {
    return this.paginate(this.places, page, pageSize);
  }
  allAdventures(page = 1, pageSize = CONSTANTS.PAGE_SIZE) {
    return this.paginate(this.adventures, page, pageSize);
  }
}

module.exports = BucketList;
