

var countryList = {
  countries: [],
  displayCountries: function() {
    console.log('Countries I would like to visit: ', this.countries);
  },
  addToCountry: function(textCountry) {
    this.countries.push({
      textCountry: textCountry,
      completed: false
    });
    this.displayCountries;
  },
  changeCountry: function(position, textCountry) {
    this.countries[position].textCountry = textCountry;
    this.displayCountries;
  },
  deleteCountry: function(position) {
    this.countries.splice(position, 1);
    this.displayCountries();
  },
  toggleCompleted: function(position) {
    var country = this.countries[position];
    country.completed = !country.completed;
    displayCountries();
  }
};
