
'use strict';

import React from "react";
import classnames from "classnames";
import Checkbox from "../Checkbox/checkbox";
import {formatData} from "../Utils/array";

class Checkboxgroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.formatValue(this.props.value),
			data: formatData(this.props.data)
		};
	}
	formatValue(value){
		return this.toArray(value,this.props.sep)
	}
	toArray (value,sep){
		if(value === null || value === undefined){
			value = []
		}
		if(value instanceof Array){
			value = value
		}else if(typeof value === 'string' && sep){
			value = value.split(sep)
		}else if(sep){
			value = value.map((v) => v.toString())
		}
		return value
	}


	handleChange (value) {
		if (this.props.readOnly) {
			return;
		}
		this.setState({ value });
	}
	render(){
		let className = classnames(this.props.className,'checkbox_group');
		let items = this.state.data.map(function(item,i){
			return (
				<Checkbox key = {i}
						checked = {this.state.checked}
						disabled={this.props.readOnly}
						onClick = {this.handleChange.bind(this)}
						value= {item.value}
						text = {item.text}
				/>
			)
		},this);
		return (
			<div style ={this.props.style} className = {className}>{items}</div>
		)
	}
}


export { Checkboxgroup as default}
