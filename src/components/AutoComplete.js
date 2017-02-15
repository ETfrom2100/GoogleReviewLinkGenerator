import React, {Component} from 'react';

export default class AutoComplete extends Component{
	
	onConfirmClick(){
		const business = document.getElementById('autocomplete_field').value;
		if(business.trim() != '')
		{
			
		}
		else
		{
			alert("Please enter a buisness name");
		}
	}
	
	render(){
		return (
			<div className="input-group">
				<input id="autocomplete_field"  type="text" className="form-control" name="business_name" placeholder="Type a business name here and select one from the drop down list"  />
				<span className="input-group-btn">
					<button className="btn btn-primary" type="button" onClick={this.onConfirmClick}>Confirm</button>
				</span>
			</div>
		)
	}
	componentDidMount(){
		const input = document.getElementById('autocomplete_field');
		const autocomplete = new google.maps.places.Autocomplete(input);
		autocomplete.setTypes([]);
		autocomplete.addListener('place_changed', ()=>{
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
		});
	}
}