var React = require('react')
var ListItem = require('./ListItem')
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var IngredientStore = require('../reflux/ingredients-store');

var List = React.createClass({
  mixins:[Reflux.listenTo(IngredientStore, 'onChange')],
  getInitialState: function(){
    return {ingredients: [], newText:''};
  },

  componentWillMount: function(){
      Actions.getIngredients();
  },

  onChange: function(event, ingredients){
      this.setState({ingredients: ingredients});
  },

  handleClick: function(e){
    if(this.state.newText){
      Actions.postIngredient(this.state.newText);
    }
    this.setState({newText:''});
  },

  handleChange:function(e){
    this.setState({ newText: e.target.value });
  },

  render: function() {
    var listItems = this.state.ingredients.map(function(item){
      return <ListItem key={item.id} text={item.text} />  ;
    });

    return (
      <div>
      <input placeholder="Add item" onChange={this.handleChange} value={this.state.newText} />
      <button onClick={this.handleClick}>Add</button>
      <ul>{listItems}</ul>
      </div>
       ) ;
  }
})

module.exports = List ;
