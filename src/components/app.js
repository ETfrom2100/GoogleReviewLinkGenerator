import React, { Component } from 'react';
import AutoComplete from './AutoComplete';

export default class App extends Component {
  render() {
    return (
      <div>
		<h3 className="text-center">Google Review Link Generator</h3>
		<AutoComplete />
	  </div>
    );
  }
}
