var React = require('React');
var moment = require('moment');

var Result = React.createClass({
  render : function(){
    var stars = [];
    for(var i = 0 ; i < this.props.data.averageUserRating; i+=1){
      stars.push(<span className="glyphicon glyphicon-star"></span>);
    }

    return (
    <div className="well">
      <div className="media">
        <a className="pull-left" href="#">
          <img className="media-object" src={this.props.data.artworkUrl60}/>
        </a>
        <div className="media-body">
          <h4 className="media-heading">{this.props.data.trackName}</h4>
          <p className="text-right">by {this.props.data.artistName}</p>
          <p>{this.props.data.description}</p>
          <ul className="list-inline list-unstyled">
            <li>
              <span><a href={this.props.data.trackViewUrl} target="_blank"className="btn btn-primary">Get App</a></span>
            <li>|</li>
            <li>
              { stars }
            </li>
            <li>|</li>
            <li><a href={this.props.data.artistViewUrl} target="_blank">{this.props.data.artistName}</a></li>
            <li>|</li>
            <li>
              <span><i className="glyphicon glyphicon-calendar"></i>{moment(this.props.data.releaseDate).fromNow()}</span></li>
            </li>
          </ul>
        </div>
      </div>
    </div>);
  }
});

module.exports = Result;