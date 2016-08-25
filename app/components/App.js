var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./List');

var App = React.createClass({
  render : function(){
    return <ListManager /> ;
  }
});

module.exports = App ;
