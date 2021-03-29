const CustomError = require("../extensions/custom-error");

const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		if (value == undefined && value != null) value = "";
		this.chain.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (
			position < 0 ||
			position > this.chain.length ||
			!Number.isInteger(position)
		) {
			this.chain = [];
			throw new Error();
		}
		this.chain.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		let str = `${this.chain.join("~~")}`;
		this.chain.splice(0);
		return str;
	},
};

module.exports = chainMaker;
