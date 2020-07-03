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
$ unity-package-cli COMMAND
running command...
$ unity-package-cli (-v|--version|version)
unity-package-cli/1.0.0 darwin-x64 node-v12.18.2
$ unity-package-cli --help [COMMAND]
USAGE
  $ unity-package-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`unity-package-cli help [COMMAND]`](#unity-package-cli-help-command)
* [`unity-package-cli pipe [FILE]`](#unity-package-cli-pipe-file)
* [`unity-package-cli sandbox [CMD]`](#unity-package-cli-sandbox-cmd)

## `unity-package-cli help [COMMAND]`

display help for unity-package-cli

```
USAGE
  $ unity-package-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `unity-package-cli pipe [FILE]`

describe the command here

```
USAGE
  $ unity-package-cli pipe [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ upc hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/pipe.ts](https://github.com/fuzhongqing/unity-package-cli/blob/v1.0.0/src/commands/pipe.ts)_

## `unity-package-cli sandbox [CMD]`

create sandbox envriment

```
USAGE
  $ unity-package-cli sandbox [CMD]

OPTIONS
  -f, --force

EXAMPLE
  $ upc sandbox
```

_See code: [src/commands/sandbox.ts](https://github.com/fuzhongqing/unity-package-cli/blob/v1.0.0/src/commands/sandbox.ts)_
<!-- commandsstop -->
