var fs = require('fs');

// var createStream = fs.createWriteStream('JournalDev.txt');
// createStream.end();


// var createwriteStream = fs.createWriteStream('JournalDev.txt');
// createwriteStream.write("Hello World");
// createwriteStream.write("\nok bye");
// createwriteStream.end(); 

// function readdata(err,data)
// {
//     console.log(data);
//     if(err)
//     {
//         console.log(err);
//     }
// }

fs.readFile('JournalDev.txt',function readdata(error,data)
{
    console.log(data);
}
);