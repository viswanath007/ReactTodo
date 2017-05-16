var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText  = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function(){
    return (
      <div>
        <div>
          <label>
            <input type="search" ref="searchText" placeholder='Search todos' onChange={this.handleSearch}/>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show Completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;