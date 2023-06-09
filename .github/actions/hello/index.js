const core = require("@actions/core")
const github = require("@actions/github")
var fs = require('fs');


try{
    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    var files = fs.readdirSync('/');
    

    console.log(JSON.stringify(files, null, '\t'));


    core.setOutput("files : ", files.toString());


    console.log(JSON.stringify(github, null, '\t'));

} catch(error) {
    core.setFailed(error.message);
}