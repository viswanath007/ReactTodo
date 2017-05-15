var React        = require('react'),
    ReactDOM     = require('react-dom');
// var Route        = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// Load custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
      <h1>React Todo</h1>
      ,document.getElementById('app')
    );