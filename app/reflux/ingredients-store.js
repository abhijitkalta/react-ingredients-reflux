var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.js');

var IngredientStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function(){
    HTTP.get('/ingredients')
    .then(function(data){
      this.ingredients = data;
      this.fireUpdate();
    }.bind(this));
  },

  postIngredient: function(text){

  },
  
  fireUpdate: function(){
    this.trigger('change', this.ingredients);
  }
});

module.exports = IngredientStore;
