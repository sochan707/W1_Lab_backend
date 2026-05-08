import { writeFileSync, readFileSync, writeFile, readFile } from 'fs';
const filePath = "./hello.txt";

// Write to a file (synchronously)
writeFile(filePath, "Hello", (err) => {
    if(err){
        console.error("Error writing to file: ", err);
        return;
    }

    // Read the file (synchronously)
    readFile(filePath, "utf8", (err, content) => {
        if(err){
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content:", content);
    });
});



