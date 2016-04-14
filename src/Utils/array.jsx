'use strict';

export function formatData (data){
	if(typeof data === 'function'){
		data.then((res) => {
			this.setState({ data: this.formatData(res) });
		})();
		return [];
	}else {
		return getArray(data);
	}
}

function getArray (arr){
	if(!arr){
		return [];
	}
	arr = arr.map(function(item){
		if(typeof item !== 'object'){
			return {text :item, value:item}
		}else{
			return item
		}
	})
	return arr;
}
