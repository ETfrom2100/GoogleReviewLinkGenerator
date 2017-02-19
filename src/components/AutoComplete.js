import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setFetchingState,fetchLRD,selectBiz} from '../actions/index';

class AutoComplete extends Component{
	constructor(props){
		super(props);
		
		this.autocomplete = null;
		this.onFormSubmit = this.onFormSubmit.bind(this);
		
	}
	onFormSubmit(event){
		event.preventDefault();
		//this.props.getPlaceInfo(this.state.place);
		const autocomplete_val = document.querySelector('#autocomplete_field').value;
		if(autocomplete_val.trim()!= '')
		{
				
			   
				const place = this.autocomplete.getPlace();
				
				const place_cid = place.url.substr(place.url.indexOf("cid=") + 4);
				
				this.props.setFetchingState(true);
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
				<div></div>
			</form>
		)
	}
	componentDidMount(){
		const input = document.getElementById('autocomplete_field');
		this.autocomplete = new google.maps.places.Autocomplete(input);
		this.autocomplete.setTypes([]);
	
	}
}
/*function mapStateToProps(state)
{
	return {isFetching:state.isFetching};
}*/
export default connect(null,{setFetchingState,fetchLRD,selectBiz})(AutoComplete);