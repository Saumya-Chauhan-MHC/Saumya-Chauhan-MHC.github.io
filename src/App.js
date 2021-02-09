import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { PLACES } from './shared/places';
import Greet from './components/greet';

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			places: PLACES
		};
	}
	
	render(){
		return (
			<div className='App'>
				<Navbar color="primary">
					<div className="container" id="brand">
						<NavbarBrand>Marvelous Mission San Jose</NavbarBrand>
					</div>
				</Navbar>
				<Greet />
				<h1>Mission San Jose 9th Grade Course Classes Information </h1>
				<Menu places={this.state.places} />
			</div>
		);
	}
}

export default App;
