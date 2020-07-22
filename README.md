unity-package-cli
=================



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/unity-package-cli.svg)](https://npmjs.org/package/unity-package-cli)
[![Downloads/week](https://img.shields.io/npm/dw/unity-package-cli.svg)](https://npmjs.org/package/unity-package-cli)
[![License](https://img.shields.io/npm/l/unity-package-cli.svg)](https://github.com/fuzhongqing/unity-package-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g unity-package-cli
$ up COMMAND
running command...
$ up (-v|--version|version)
unity-package-cli/0.0.1 darwin-x64 node-v12.18.2
$ up --help [COMMAND]
USAGE
  $ up COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`up help [COMMAND]`](#up-help-command)
* [`up readme [SUB]`](#up-readme-sub)
* [`up welcome`](#up-welcome)

## `up help [COMMAND]`

display help for up

```
USAGE
  $ up help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `up readme [SUB]`

打开文档

```
USAGE
  $ up readme [SUB]
```

_See code: [src/commands/readme.ts](https://github.com/fuzhongqing/unity-package-cli/blob/v0.0.1/src/commands/readme.ts)_

## `up welcome`

运行欢迎界面 👏

```
USAGE
  $ up welcome

EXAMPLE
  $ up welcome
```

_See code: [src/commands/welcome.ts](https://github.com/fuzhongqing/unity-package-cli/blob/v0.0.1/src/commands/welcome.ts)_
<!-- commandsstop -->
