import React, {Component} from 'react';
import {connect} from 'react-redux';

class LinkOptions extends Component{
	
	render(){
		console.log(this.props.LRD);
		if(!this.props.LRD)
		{
			return <div></div>;
		}
		const LRD = this.props.LRD;
		const place = this.props.biz;
		const biz_name = place.name;
		const biz_address = place.formatted_address;
		const biz_query = escape(biz_name.replace(/ /g,'+'))+"+"+biz_address.replace(/,/g,'').replace(/ /g,'+');
		const place_cid = place.url.substr(place.url.indexOf("cid=") + 4);
		const ROOT_URL = "https://www.google.com/search?q=";
		
								
							    /*var q2 = escape($("#biz_name").text().replace(/\s{2,}/g,' ').replace(/ /g,'+'))+"+"+street.replace(/ /g,'+')+"+"+city.replace(/ /g,'+')+"+"+state+"&fpstate=lurev_"+data+"&lrd="+data+",3,5";
								
							    var q3 = escape($("#biz_name").text().replace(/\s{2,}/g,' ').replace(/ /g,'+'))+"+"+street.replace(/ /g,'+')+"+"+city.replace(/ /g,'+')+"+"+state+"&fpstate=lurev_"+data;*/
								
		const query_str1 = biz_query + "&lrd="+LRD+",3,5&rlimm="+place_cid+"&istate=lrl:iv";
		const query_str2 = biz_query + "&fpstate=lurev_"+LRD+"&lrd="+LRD+",3,5";
		const query_str3 = biz_query + "&fpstate=lurev_"+LRD;
		return (
			<div id="linkOptions">
				<div className="input-group">
					<span className="input-group-addon" id="basic-addon1">Option1</span>
					<input type="text" className="form-control" id="option1" aria-describedby="basic-addon1" readOnly value={ROOT_URL+query_str1} />
				</div>
				<div className="input-group">
					<span className="input-group-addon" id="basic-addon2">Option2</span>
					<input type="text" className="form-control" id="option2" aria-describedby="basic-addon2" readOnly value={ROOT_URL+query_str2} />
				</div>
				<div className="input-group">
					<span className="input-group-addon" id="basic-addon3">Option3</span>
					<input type="text" className="form-control" id="option2" aria-describedby="basic-addon3" readOnly value={ROOT_URL+query_str3} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state)
{
	return {LRD:state.LRD,biz:state.biz};
}

export default connect(mapStateToProps)(LinkOptions);