import React, {Component} from 'react';
import '../css/body.css';
import {btnSubmit} from '../util/btnSubmit.js';

class Body extends Component{

	render(){
		return(
			<section className="section">
				<div className="form">
						<div className="col-25">Name: </div><br />
						<input type="text" id="inputName" name="name" className="col-75"placeholder="Your name.." />
						<br /> <div className="col-25">Age:</div> <br />
						<input type="number"id="inputAge"className="col-75" placeholder="Your age.."/>
						<br /> <div className="col-25">Gender:</div><br />
						<div className="col-75"><input type="radio" id="rdbMale" defaultValue="Male" name="gender" /> Male</div><br />
						<div className="col-75"><input type="radio" id="rdbFemale" defaultValue="Female" name="gender"/>Female</div><br /><br />
						<button className="col-75" type="submit" onClick={btnSubmit}>SUBMIT</button>
						
				</div>
				<nav className="display">
					<p id="name" />
					<p id="age" />
					<p id="gender" />
				</nav>
			</section>
		
		);
	}
}
export default Body;