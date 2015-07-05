var React = require('React');

var Result = React.createClass({
  render : function(){
    return (<div className="list-group-item">
              <div className="row">
                <div className="col-xs-4">
                  <img src={this.props.data.artworkUrl60} width="100px;" height="100px;" alt=""/>
                </div>
                <div className="col-xs-8">
                  <div>
                    <h4>{this.props.data.trackName}</h4>
                    by <a href={this.props.data.artistViewUrl} target="_blank">{this.props.data.artistName}</a>
                  </div>
                </div>
              </div>
              <div className="row left">
                <a href={this.props.data.trackViewUrl} target="_blank" className="btn btn-primary">Get</a>
              </div>
            </div>);
  }
});

module.exports = Result;