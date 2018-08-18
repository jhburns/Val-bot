debug = true

var nrc = require('node-run-cmd');
var config = require('./sync-config.json');

const { exec } = require('child_process');

var command = "";

//Making the command, env vars need to be first to have sync work correctly
command += "GLITCH_PROJECT_ID='" + config.projectID + "' ";
command += "GLITCH_TOKEN='" + config.authorization + "' ";
command += "GH_REPO='" + config.repo + "' ";
if (debug) {
    command += " DEBUG=sync-glitch* ";
}
command += "./node_modules/.bin/sync-glitch";

var dataCallback = function(data) {
    console.log(data);
};

console.log(command);

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.log("Error: could not run command, make sure that sync-config is correct");
        return;
    }

    //if statements needed to prevent extra lines if no error or out
    if (stdout !== "") {
        console.log(stdout);
    }

    if (stderr !== "") {
        console.log(stderr);
    }
});