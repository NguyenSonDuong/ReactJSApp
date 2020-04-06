import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style_item.css';
class ItemList extends React.Component{
	constructor(props){
	  super(props);
	  this.state = {
		  "data": "OK"
	  };
	}
	
	render(){
		return (
		    <div className="card card-item" >
		      <img src={this.props.src} className="card-img-top"/>
			  <div className="card-body">
				  <h5 className="card-title">{this.props.title}</h5>
				  <p className="card-text">
				  {this.props.status}
				  </p>
				  <a href="#" className="btn btn-primary btn-red">Đi đến</a>
			  </div>
		    </div>
  		);
	}
}
export default ItemList;