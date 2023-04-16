const {
    readdir,
    readFile,
    readFileSync,
    writeFile,
    appendFile
  } = require("fs");
  const {
    join
  } = require("path");
  const inbox = join(__dirname, "inbox");
  const outbox = join(__dirname, "outbox");
  const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");
var async = require( 'async' );

const error = () => {
    if (error) return console.log("Error: Folder inaccessible");
}
const file = (file) => { readFile(join(inbox, file), "utf8", (errB, data) => {
    writeFile(join(outbox, file), reverseText(data), errorW)
    console.log(`${file} was successfully saved in the outbox!`)})
}
const errorW = (error) => {
    if (error) return console.log("Error: File could not be saved!");
}
async.waterfall([
    function leer(done) {
        readdir(inbox, function (errA, content) {
        done(errA, content);})
    },
    function procesar(result, done) {
        result.forEach(file)
        done
    }
], function(errA, output) {
    if(errA) {console.log("Error: Folder inaccessible")}
    if(errB) {console.log("Error: File error")}
});