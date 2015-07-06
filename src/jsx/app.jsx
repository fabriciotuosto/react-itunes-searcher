// Frameworks
var React = require('React');
var Rx    = require('rx');
var $     = require('jquery');
var _     = require('lodash');
// Components
var Header  = require('./header.jsx');
var Results = require('./results.jsx');

// App Variables
var results = [];
var url     = 'https://itunes.apple.com/search?country=us&entity=software&term=';

// Index
var Index = React.createClass({
  render: function () {
    return (<div>
      <Header/>
      <div className="container container-fluid">
        <Results results={results}/>
      </div>
    </div>);
  }
});
// Rendering
React.render(<Index/>, document.body);

// Search functionality
var term = function (event) {
  return event.target.value;
};

var search = function (term) {
  return $.ajax({ url : url + term, dataType: 'jsonp'}).promise();
};

var keyups = Rx.Observable
  .fromEvent(document.querySelector('#q'), 'keyup')
  .map(term)
  .debounce(500)
  .distinctUntilChanged()
  .flatMapLatest(search);

keyups.subscribe(function (response) {
  results = response.results;
  React.render(<Index/>, document.body);
});