import {Command, flags} from '@oclif/command'
const yeoman = require('yeoman-environment');
const loadJsonFile = require('load-json-file');
const path = require('path');
const fs = require('fs');
const Configstore = require('configstore');
const packageJson = require(path.join(process.cwd(), "package.json"));
const { exec } = require("child_process");


export default class SandboxCreate extends Command {
  static description = 'create sandbox envriment'

  static examples = [
    `$ upc sandbox`,
  ]

  static flags = {
    force: flags.boolean({char: 'f'}),
    /*
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
    */
  }

  static args = [{name: 'cmd'}]

  async run() {
    const {args, flags} = this.parse(SandboxCreate)
    const env = yeoman.createEnv();
    const config = new Configstore(packageJson.name, {sandbox: false});

    var cfg = path.join(process.cwd(), ".yo-rc.json");

    await loadJsonFile(cfg)
    .then((cfg: any) => {

      if (flags.force || !config.get('sandbox', false)) {
        return new Promise((resolve, reject) => {
          env.lookup(() => {  
            env.run('unity-package:sandbox', {'skip-install': true}, (err: any) => {
              if (err) {
                reject(err);
              } else {
                config.set('sandbox', true);
                resolve();
                return runLaunch();
              }
            });          
          });
        });
      } else {
        return runLaunch();
      }
    })
    .catch((er: any)=> {
      this.log(er);
      process.exit(1);
    });
    function runLaunch() {
      return new Promise((reslove, reject) => {
        /*
        const config = new Configstore('global', {'unity': '/Volumes/hdd0/Applications/Unity/Unity.app/Contents/MacOS/Unity'});
        var unity = config.get('unity');
        console.log(unity);
        exec(`${unity} -projectpath ${path.join(process.cwd(), 'Workspace', `${packageJson.name}_Sandbox`)}`, (error, stdout, stderr) => {
          if (error) {
              reject(error);
              return;
          }
          if (stderr) {
              reject(stderr);
              return;
          }
          console.log(`stdout: ${stdout}`);
          reslove();

      });        */
        console.log(`sandbox at [${path.join(process.cwd(), 'Workspace', `${packageJson.name}_Sandbox`)}]`);
      });
    }
  }
}
