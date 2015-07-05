var React = require('React');

function cancel(event){
  event.preventDefault();
}

var Header = React.createClass({
  render : function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top page-header">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">iTunes Search</a>
          </div>
          <form className="navbar-form navbar-right" role="search" onSubmit={cancel}>
            <div className="form-group">
              <input id="q" type="text" className="form-control" placeholder="Search in Itunes"/>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </nav>);
  }
});

module.exports = Header;