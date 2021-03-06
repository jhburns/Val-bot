const logger = require("../util/logger");

class Command {
    //name should be string,
    //desc should also be a string, but longer
    // oncall should be function
    constructor(name, alias, desc, oncall, draft, interpolated_value) {
        this.name = name;
        this.alias = alias;
        this.oncall = oncall;
        this.desc = desc;
        this.interpolated_value = interpolated_value;

        if (draft == undefined || draft == null) {
            this.draft = false;
        } else {
            this.draft = draft;
        }
        Command.all_commands.push(this);
    }

    // Sets up static array to hold all commands
    static init() {
        Command.all_commands = [];
    }

    // getCommands
    // return - array of all command objects
    static getCommands() {
        return Command.all_commands;
    }
}

//needs to be ran before any commands are made
Command.init();

module.exports = Command;

/*
  Just in case something uncaught it thrown in a class
 */
process.on('uncaughtException', function (exception) {
    logger.error(exception);
});

process.on('unhandledRejection', function (exception) {
    logger.error(exception);
});
