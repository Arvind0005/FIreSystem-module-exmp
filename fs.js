var fs = require('fs');

///to create a file.
// var createStream = fs.createWriteStream('JournalDev.txt');
// createStream.end();

///to write a file.
// var createwriteStream = fs.createWriteStream('JournalDev.txt');
// createwriteStream.write("Hello World");
// createwriteStream.write("\nok bye");
// createwriteStream.end(); 


//to readdata from the file.
function readdata(err,data)
{
    console.log(data);
    if(err)
    {
        console.log(err);
    }
}

//readdata();

//to readdata from the file.
fs.readFile('JournalDev.txt','utf8',readdata);