import axios from 'axios';

export const FETCH_LRD = 'FETCH_LRD';
export const SELECT_BIZ = 'SELECT_BIZ';
export function fetchLRD(place_cid){
	const request = axios.get(`http://localhost:8888/php/getLRD.php?place_cid=${place_cid}`);
	
	return {
		type:FETCH_LRD,
		payload:request
	}
}
export function selectBiz(biz){
	return {
		type: SELECT_BIZ,
		payload:biz
	}
}