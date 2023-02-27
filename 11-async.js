const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, first) => {
  if (err) {
    console.log(err);
    return;
  }
  readFile('./content/second.txt', 'utf8', (err, second) => {
    if (err) {
      console.log(err);
      return;
    }
    const result = `here is the the ramen: ${first}, ${second}`;
    writeFile('./content/result-async.txt', result, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('File written successfully');
    });
  });
});
