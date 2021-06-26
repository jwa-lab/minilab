#!/usr/bin/env node

const { Command } = require("commander");
const clear = require("clear");
const compose = require("docker-compose");
const path = require("path");

const package = require("./package.json");
const { showBanner } = require("./src/banner");

clear();

showBanner();

const program = new Command();

program
  .description("minilab start a JWA Platform development environment")
  .version(package.version)
  .name("minilab")
  .usage("[global options] command");

program
  .command("start")
  .description("start the minilab environment")
  .action(() => {
    compose.upAll({ cwd: path.join(__dirname), log: true }).then(
      () => {
        console.log("minilab started");
      },
      (err) => {
        console.error("something went wrong:", err.message);
      }
    );
  });

program
  .command("pull")
  .description("download the latest versions of the minilab environment")
  .action(() => {
    compose.pullAll({ cwd: path.join(__dirname), log: true }).then(
      () => {
        console.log("minilab updated");
      },
      (err) => {
        console.error("something went wrong:", err.message);
      }
    );
  });

program
  .command("stop")
  .description("stop the minilab environment")
  .action(() => {
    compose.down({ cwd: path.join(__dirname), log: true }).then(
      () => {
        console.log("minilab stopped");
      },
      (err) => {
        console.error("something went wrong:", err.message);
      }
    );
  });

program
  .command("kill")
  .description("kill the minilab environment")
  .action(() => {
    compose.kill({ cwd: path.join(__dirname), log: true }).then(
      () => {
        console.log("minilab killed");
      },
      (err) => {
        console.log("something went wrong:", err.message);
      }
    );
  });

program.parse(process.argv);
