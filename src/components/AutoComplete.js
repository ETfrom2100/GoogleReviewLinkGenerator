import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPlaceInfo} from '../actions/index';

export default class AutoComplete extends Component{
	constructor(props){
		super(props);
		this.state = {place:''};
		this.autocomplete = null;
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onPlaceChange = this.onPlaceChange.bind(this);
	}
	onFormSubmit(event){
		event.preventDefault();
		//this.props.getPlaceInfo(this.state.place);
		if(this.state.place.trim()!= '')
		{
				const place = this.autocomplete.getPlace();
				console.log(place.place_id);
				if (!place.geometry) {
						// User entered the name of a Place that was not suggested and
						// pressed the Enter key, or the Place Details request failed.
						window.alert("No details available for input: '" + place.name + "'");
						return;
				}
		}
		else
		{
			alert("Please enter a place");
		}
		
			
		//this.setState({place:''});
	}
	onPlaceChange(event){
		this.setState({place:event.target.value});
	}
	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input id="autocomplete_field"  type="text" 
						className="form-control" 
						name="business_name" 
						value={this.state.place} 
						placeholder="Type a business name here and select one from the drop down list"
						onChange={this.onPlaceChange}/>
				<span className="input-group-btn">
					<button className="btn btn-primary" type="submit">Generate</button>
				</span>
			</form>
		)
	}
	componentDidMount(){
		const input = document.getElementById('autocomplete_field');
		this.autocomplete = new google.maps.places.Autocomplete(input);
		this.autocomplete.setTypes([]);
		/*autocomplete.addListener('place_changed', ()=>{
			const place = autocomplete.getPlace();
			console.log(place);
			if (!place.geometry) {
				// User entered the name of a Place that was not suggested and
				// pressed the Enter key, or the Place Details request failed.
				window.alert("No details available for input: '" + place.name + "'");
				return;
			}
			const address = place.formatted_address;
			if (place.address_components) {
				
			}
			console.log(address);
		});*/
	}
}