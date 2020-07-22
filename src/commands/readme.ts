import {Command, flags} from '@oclif/command';

const c = require('ansi-colors');
const { exec } = require("child_process");
const marked = require('marked');
const TerminalRenderer = require('marked-terminal');
const fs = require('fs');


export default class Readme extends Command {
    static description = '打开文档'
    static version = '0.1-200722'

    static args = [
        {name: 'sub'}
      ]

    async run() {

        var docfile =  __dirname + '/docs/README.md';

        const {args} = this.parse(Readme);

        switch (args.sub) {
            case 'overview':
                docfile =  __dirname + '/docs/overview.md';
                break;
            case 'dev':
                docfile =  __dirname + '/docs/dev.md';
                break;
            case 'test':
                docfile =  __dirname + '/docs/dev.md';
                break;
            case 'pub':
                docfile =  __dirname + '/docs/pub.md';
                break;
            case 'together':
                docfile =  __dirname + '/docs/together.md';
                break;
        }

        marked.setOptions({
            // Define custom renderer
            renderer: new TerminalRenderer()
        });


        fs.readFile(docfile, 'utf8', function(err: any, data: string) {
            if (err) throw err;
            console.log(marked(data));

            console.log(c.cyan(`文档修订版本:\t ${Readme.version}`))
        });
           
          // Show the parsed data
    }

}