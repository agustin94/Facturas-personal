
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const test = 'C:\\Users\\Agustin Moreno\\Desktop\\Proyectos The Eye\\Facturas-personal\\pdf\\';

//joining path of directory 
const directoryPath = path.join(__dirname, 'pdf');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        var file1 = file;
        console.log(test+file1)
        
        //fs.unlinkSync(test+file1);
        //console.log('File deleted!');
    });

    
});
module.exports = {
    directoryPath: directoryPath
}