const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('countiy')
  .description('CLI to do the boring work')
  .version('0.8.0');

program.command('count')
  .description('count the total number of lines in a file')
  .argument('<file>', 'file to count')
  .option('--first', 'display just the number of line in the file')
  .action((file) =>{
    fs.readFile(file, 'utf8', (err, data) => { 
      if (err) {
        console.log("err");
      } else {
      
      }
    });
  });
program.parse();