import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchLRD,selectBiz} from '../actions/index';

class AutoComplete extends Component{
	constructor(props){
		super(props);
		this.state = {biz_name:'',biz_address:''};
		this.autocomplete = null;
		this.onFormSubmit = this.onFormSubmit.bind(this);
		//this.onPlaceChange = this.onPlaceChange.bind(this);
	}
	onFormSubmit(event){
		event.preventDefault();
		//this.props.getPlaceInfo(this.state.place);
		const autocomplete_val = document.querySelector('#autocomplete_field').value;
		if(autocomplete_val.trim()!= '')
		{
				const place = this.autocomplete.getPlace();
				//console.log(place);
				//const biz_name = place.name;
				//const biz_address = place.formatted_address;
				//this.setState({biz_name:biz_name,biz_address:biz_address});
				const place_cid = place.url.substr(place.url.indexOf("cid=") + 4);
				this.props.fetchLRD(place_cid);
				this.props.selectBiz(place);
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
		
			
		
	}
	/*onPlaceChange(event){
	
				
		this.setState({place:event.target.value});
	}*/
	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input id="autocomplete_field"  type="text" 
						className="form-control" 
						name="business_name" 
						
						placeholder="Type a business name here and select one from the drop down list"
						/>
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
export default connect(null,{fetchLRD,selectBiz})(AutoComplete);