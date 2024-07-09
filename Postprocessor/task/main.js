fs = require('fs');


function processDatabase(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;

        const lines = data.split('\n');
        const users = lines.filter(line => line.split(', ')[1] !== '-');

        const lastUser = users[users.length - 1].split(', ');
        console.log(`The user ${lastUser[1]} has "${lastUser[3]}" consent status for sending emails`);
    });
}

processDatabase('database.csv');