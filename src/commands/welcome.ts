const c = require('ansi-colors');
const figlet = require('figlet');
 


import {Command, flags} from '@oclif/command'

export default class Welcome extends Command {
  static description = '运行欢迎界面 👏'

  static examples = [
    `$ up welcome`,
  ]
  async run() {

    var THAT = this;
    var text = "Welcome to up-cli !";
     
    c.alias('shell', c.cyan.bold);
    c.alias('shell_dollar', c.cyan.bold);


    figlet(text, function(err: any, data: any) {
      if (err) {
          console.log(text);
          console.dir(err);
          return;
      }
      THAT.log(c.green(data));
      THAT.log(c.yellow("⚠️ 在1.0.0版本发布前，所有的接口、机制、行为都可能随时发生变更 🤪\n"));

      THAT.log(c.cyan("使用前必知:"));
      THAT.log(c.cyan(`如果想再次浏览这个页面，在项目根目录运行 ${c.shell_dollar('$')}${c.shell('npx up welcome')} 即可`));

      THAT.log(c.red(`初次使用请认真阅读 ${c.shell_dollar('$')}${c.shell('npx up readme')}, 它包含了:`));
      THAT.log(c.underline("1. 项目总览和必知细节"));
      THAT.log(c.underline("2. 开发的正确姿势"));
      THAT.log(c.underline("3. 测试的正确姿势"));
      THAT.log(c.underline("4. 发布的正确姿势"));
      THAT.log(c.underline("5. 如何一起自定义脚手架"));
    });
  }
}
