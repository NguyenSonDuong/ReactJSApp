import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './item';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:[
				{
					"id":"ss",
					"message":"eee"
				},
				{
					"id":"ss",
					"message":"tyty"
				}
			]
		}
		this.getPost = this.getPost.bind(this);
	}

	getPost(){
		// let url = "https://graph.facebook.com/v6.0/me/feed?access_token=EAAKY8ZBg6g8kBAPrttTE8ZABb67tk5FEabHmD9QwQxqHk2UnSGZBLzlYvHdKfZAxfmYcqoeLuvJqZBCmKQXPIZBtkidZCORmECwpOt6h6ETN2gKIpYW8Op4rW9ZBVZA7LAs5sTbw7zbd75Pjn5xlGFmuPfXkt5nKomvMsUqntvN11446uOjDvb4JcvmZAT4jPtxhswCQk8Q9tZCSwZDZD";
		// let xHttp = new XMLHttpRequest();
		// xHttp.onreadystatechange = function() {
		// 	if(xHttp.readyState === 4 && xHttp.status === 200){
		// 		let data2 = [];
		// 		let json = JSON.parse(xHttp.responseText);
		// 		json.data.map(x => data2.push(x));
		// 		this.setState({
		// 			data:data2
		// 		})
		// 	}else{
				
		// 	}
		// }.bind(this);
		// xHttp.open("GET",url);
		// xHttp.send();
		let url = "https://api.dhdt.vn/account/login/check-smartname";
		let xHttp = new XMLHttpRequest();
		let data = {"acc_type":"user", "smartname":"DTC175524801030034"}
		xHttp.onreadystatechange = function() {
			if(this.readyState === 4 && this.status === 200){
				let data2 = [];
				let json = JSON.parse(this.responseText);
                console.log(json);
			}else{
				console.log("Error: "+this.status);
			}
		}.bind(this);
		xHttp.open("POST",url,true);
		xHttp.send(data);
	}

	render(){
		return(
			<div className="container App" onClick={this.getPost}>
				{this.state.data.map(x => <ItemList src="" title={x.ID} status={x.message}/> )}
			</div>
		)
	}
		
}

export default App;
