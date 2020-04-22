import React, { Component } from 'react';

import {connect} from 'react-redux';

import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


import './App.css'


import {setSearchField} from '../actions'

 
const mapSateToProps = state => {
	return {
		searchField: state.searchField
	}
}


const mapDispatchToProps = (dispatch) => {
   return{
   	onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class  App extends  Component {

	constructor() {

		super()
		this.state = {
	     robots: [] ,
	     searchField : ''
        }

	}


componentDidMount(){

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())

	.then(users =>  this.setState({robots : users}))

	
}

onSearchChange = (event) => {

	this.setState({searchField:  event.target.value});

}
	render() {


	const {robots, searchField} = this.state;


	const filteredRobots = robots.filter(robot => {
	return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})

	if ( !robots.length){
		return <h2 className = 'tc'> L O A D I N G </h2>
	}else {

			return(
			<div className = 'tc'>
				<h2 className ='f1'> R o b o F r i e n d s </h2>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
				<Cardlist robots={filteredRobots}/>
				</Scroll>
			</div>


		);

	  } 
    } 

}





export default  connect(mapSateToProps, mapDispatchToProps)(App);