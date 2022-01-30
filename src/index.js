module.exports = function check(str, bracketsConfig) {
	let stack = [];
	let lastStackItem;
	let closeBracket;
	str = str.split('');
	for (let i = 0; i <= str.length; i++) {
		if (bracketsConfig.some(config => str[i] === config[0] && !stack.includes(config[1]))) stack.push(str[i]);
		else if (bracketsConfig.some(config => str[i] === config[1])) {
			if (stack.length === 0) return false;
			lastStackItem = stack[stack.length - 1];
			closeBracket = str[i];
			if (bracketsConfig.some(config => config[0] === lastStackItem && config[1] === closeBracket)) stack.pop();
		}
	}
	return !stack.length;
}
