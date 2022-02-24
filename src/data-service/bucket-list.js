const { default: axios } = require("axios");

class BucketList {
  constructor() {}
  allPlaces() {
    const vplaces = require("../data/places.json");
    this.places = vplaces.map((p) => {
      p.category = "places";
      return p;
    });
    return this.places;
  }
  all() {
    this.allPlaces();
    const response = [...this.places];
    return response;
  }
}

module.exports = BucketList;
