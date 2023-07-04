var fs= require('fs');

fs.readFile('test.txt', function(err, data){
    if(err) {
        console.log(err);
    }
    setTimeout(() => {
        console.log('done with data')}, 1000);

    });

    console.log('done');