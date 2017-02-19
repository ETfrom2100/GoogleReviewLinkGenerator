import React, {Component} from 'react';
import {connect} from 'react-redux';

class LinkOptions extends Component{
	
	render(){
		
		console.log("isFetching:",this.props.isFetching);
		if(!this.props.LRD)
		{
			if(this.props.isFetching)
			{
				return <div>Generating links...Please wait...</div>
			}
			return <div></div>;
		}
		
			
		const LRD = this.props.LRD;
		const place = this.props.biz;
		const biz_name = place.name;
		const biz_address = place.formatted_address;
		const biz_query = escape(biz_name.replace(/ /g,'+'))+"+"+biz_address.replace(/,/g,'').replace(/ /g,'+');
		const place_cid = place.url.substr(place.url.indexOf("cid=") + 4);
		const ROOT_URL = "https://www.google.com/search?q=";
		
								
							   
								
		const query_str1 = biz_query + "&lrd="+LRD+",3,5&rlimm="+place_cid+"&istate=lrl:iv";
		const query_str2 = biz_query + "&fpstate=lurev_"+LRD+"&lrd="+LRD+",3,5";
		const query_str3 = biz_query + "&fpstate=lurev_"+LRD;
		return (
			<div id="linkOptions">
				<div className="input-group">
					<span className="input-group-addon" id="basic-addon1">Option1</span>
					<input type="text" className="form-control link-option" id="option1" aria-describedby="basic-addon1" readOnly value={ROOT_URL+query_str1} />
					<span className="input-group-btn"><a href={ROOT_URL+query_str1} target="_blank" className="btn btn-secondary">Try it</a></span>
				</div>
				<div className="input-group">
					<span className="input-group-addon" id="basic-addon2">Option2</span>
					<input type="text" className="form-control link-option" id="option2" aria-describedby="basic-addon2" readOnly value={ROOT_URL+query_str2} />
					<span className="input-group-btn"><a href={ROOT_URL+query_str2} target="_blank" className="btn btn-secondary">Try it</a></span>
				</div>
				<div className="input-group">
					<span className="input-group-addon" id="basic-addon3">Option3</span>
					<input type="text" className="form-control link-option" id="option2" aria-describedby="basic-addon3" readOnly value={ROOT_URL+query_str3} />
					<span className="input-group-btn"><a href={ROOT_URL+query_str3} target="_blank" className="btn btn-secondary">Try it</a></span>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state)
{
	return {LRD:state.LRD.value,biz:state.biz, isFetching:state.LRD.isFetching};
}

export default connect(mapStateToProps)(LinkOptions);