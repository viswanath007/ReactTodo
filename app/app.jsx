var React        = require('react'),
    ReactDOM     = require('react-dom');
// var Route        = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp     = require('TodoApp');

// Load foundation
$(document).foundation();

// Load custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={TodoApp}>
        </Route>
      </Router>
      ,document.getElementById('app')
    );