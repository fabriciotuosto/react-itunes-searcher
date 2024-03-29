var React = require('React');
var Result = require('./result.jsx');

var Results = React.createClass({
  render : function(){
    var items = this.props.results.map(function(item){ return <Result key={item.bundleId} data={item} />;});
    return (
        <div className="results">
          { items }
        </div>);
  }
});

module.exports = Results;