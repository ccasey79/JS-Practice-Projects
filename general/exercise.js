

var countryList = {
  countries: [],
  displayCountries: function() {
      if(this.countries.length === 0 ) {
        console.log('The country list is empty');
      } else {
        console.log('My countries: ');
          for( var i = 0; i < this.countries.length; i++ ) {
            if(this.countries[i].completed === true ) {
              console.log('(x)', this.countries[i].textCountry);
            } else {
              console.log('()', this.countries[i].textCountry);
            }
         }
      }
  },
  addToCountry: function(textCountry) {
    this.countries.push({
      textCountry: textCountry,
      completed: false
    });
    this.displayCountries();
  },
  changeCountry: function(position, textCountry) {
    this.countries[position].textCountry = textCountry;
    this.displayCountries();
  },
  deleteCountry: function(position) {
    this.countries.splice(position, 1);
    this.displayCountries();
  },
  toggleCompleted: function(position) {
    var country = this.countries[position];
    country.completed = !country.completed;
    this.displayCountries();
  },
  toggleAll: function() {
    var completedCountries = 0;
    var totalCountries = this.countries.length;

    // Get number of completed countries.
      for(var i = 0; i < totalCountries.length; i++) {
        if(this.countries[i].completed === true ) {
          completedCountries++;
        }
      }
   // Case 1: If everythings true, make everything false
      if(completedCountries === totalCountries ) {
        for(var i = 0; i < totalCountries; i++) {
          this.countries[i].completed = false;
        }
   // Case 2: Make everything true
        } else {
          for(var i = 0; i < totalCountries; i++) {
            this.countries[i].completed = true;
          }
        }
      this.displayCountries();
   }
};

// var displayCountriesButton = document.getElementById('displayCountriesButton');
// displayCountriesButton.addEventListener('click', function() {
//   countryList.displayCountries();
// });
//
// var toggleAllButton = document.getElementById('toggleAllButton');
// toggleAllButton.addEventListener('click', function() {
//   countryList.toggleAll();
// });

// Handlers object - for events on objects

var handlers = {
  displayCountries: function() {
    countryList.displayCountries();
  },
  toggleAll: function() {
    countryList.toggleAll();
  },
  addToCountry: function() {
    var addCountryTextInput = document.getElementById('addCountryTextInput');
    countryList.addToCountry(addCountryTextInput.value);
    addCountryTextInput.value = "";
  },
  changeCountry: function() {
    var changeCountryPositionInput = document.getElementById('changeCountryPositionInput');
    var changeCountryTextInput = document.getElementById('changeCountryTextInput');
    countryList.changeCountry(changeCountryPositionInput.valueAsNumber, changeCountryTextInput.value);
    changeCountryPositionInput.value = "";
    changeCountryTextInput.value = "";
  }
};
