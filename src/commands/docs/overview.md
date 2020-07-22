## 总览

创建出来的目录结构

```
<root>
  ├── RepositoryRoot
  ├── README.md
  ├── node_modules
  ├── [ProjectName]Android
  ├── [ProjectName]Sandbox
  └── Documentation~
```

其中 RepositoryRoot 目录遵循[Unity官方对package的格式要求](https://docs.unity3d.com/Manual/cus-layout.html)

```
<RepositoryRoot>
  ├── package.json
  ├── README.md
  ├── CHANGELOG.md
  ├── LICENSE.md
  ├── Editor
  │   ├── Unity.[YourPackageName].Editor.asmdef
  │   └── EditorExample.cs
  ├── Runtime
  │   ├── Unity.[YourPackageName].asmdef
  │   └── RuntimeExample.cs
  ├── Tests
  │   ├── Editor
  │   │   ├── Unity.[YourPackageName].Editor.Tests.asmdef
  │   │   └── EditorExampleTest.cs
  │   └── Runtime
  │        ├── Unity.[YourPackageName].Tests.asmdef
  │        └── RuntimeExampleTest.cs
  └── Documentation~
       └── [YourPackageName].md
```

  ├── [ProjectName]Android
  ├── [ProjectName]Sandbox

这两个目录是可选的项，可以在运行`yo unity-package`向导中选择安装，也可以在后续运行 `yo unity-package:android /yo unity-package:sandbox ` 安装。

### Sandbox

这是一个本地依赖了package的Unity项目，提供一个环境提供代码运行。

### Android

大部分情况下插件需要写一些本地代码，这就是这个项目的作用。

### todo: IOS

//todo

常用依赖的一些说明

比如Google dependency manager ， newtonsoftjsonlib