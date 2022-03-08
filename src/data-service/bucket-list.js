const { default: axios } = require("axios");
const placesData = require("../data/places.json");
const adventureData = require("../data/adventure.json");
const foodData = require("../data/food.json");

const CONSTANTS = require("../constants");

class BucketList {
  constructor() {
    this.places = placesData.map((p) => {
      p.category = "place";
      return p;
    });
    this.adventures = adventureData.map((a) => {
      a.category = "adventure";
      return a;
    });
    this.foods = foodData.map((f) => {
      f.category = "food";
      return f;
    });
  }
  shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  joinAllCategories() {
    return [...this.places, ...this.adventures, ...this.foods];
  }
  paginate(array, pageNumber, pageSize) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
  randomAll() {
    const response = this.shuffle(this.joinAllCategories());
    return response[Math.floor(Math.random() * response.length)];
  }
  randomPlace() {
    return this.places[Math.floor(Math.random() * this.places.length)];
  }
  randomAdventure() {
    return this.adventures[Math.floor(Math.random() * this.adventures.length)];
  }
  randomFood() {
    return this.foods[Math.floor(Math.random() * this.foods.length)];
  }
  all(page = 1, pageSize = CONSTANTS.PAGE_SIZE) {
    const response = this.joinAllCategories();
    return this.paginate(response, page, pageSize);
  }
  allPlaces(page = 1, pageSize = CONSTANTS.PAGE_SIZE) {
    return this.paginate(this.places, page, pageSize);
  }
  allAdventures(page = 1, pageSize = CONSTANTS.PAGE_SIZE) {
    return this.paginate(this.adventures, page, pageSize);
  }
  allFoods(page = 1, pageSize = CONSTANTS.PAGE_SIZE) {
    return this.paginate(this.foods, page, pageSize);
  }
}

module.exports = BucketList;
