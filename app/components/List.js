var React = require('react')
var ListItem = require('./ListItem')
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var IngredientStore = require('../reflux/ingredients-store');

var List = React.createClass({
  getInitialState: function(){
    return {ingredients: []};
  },

  componentWillMount: function(){

  },

  render: function() {
    var listItems = this.state.ingredients.map(function(item){
      return <ListItem key={item.id} text={item.text} />  ;
    });

    return (<ul>{listItems}</ul>) ;
  }
})

module.exports = List ;
