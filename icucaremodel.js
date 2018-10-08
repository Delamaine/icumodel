
function Parameter()
{
	this.map = [
		{ node: "param", concept: "parent", prop: ""},
		{ node: "id", concept: "manual", prop: "parameterId"},
		{ node: "value", concept: "val", prop: "value" },
		{ node: "datetime", concept: "dt", prop: "date" },
	];
	
	this.parameterId;
	this.conceptId;
	this.date;
	this.value;	
}

Parameter.prototype.getXML = function(action) {	
	var res = [];		
	res.push('<' + this.map[0].node + ' conceptID="' + 
		this.map[0].concept + '" write="' + action + '">');	
	for (var i = 1; i < this.map.length; i++) {
		var value = this.map[i];		
		if (value != '')
			res.push('<' + value.node + ' conceptID="' + 
				value.concept + '">' + this[value.prop] + '</' + value.node + '>');
	}	
	res.push('</' + this.map[0].node + '>');
	return res.join("\n");	
};