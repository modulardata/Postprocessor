const fs = require('fs'); //do not change this line

fs.readFile('main.js', 'utf-8', (err, data) => {
  if (err) {
    throw err;
	}

  const words = data.split(" ")[1];
	console.log(words);
});