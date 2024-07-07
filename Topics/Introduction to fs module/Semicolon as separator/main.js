const fs = require('fs'); //do not change this line

fs.readFile('main.js', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data.split(';')[0].length);
});
