# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

# testcafe

https://devexpress.github.io/testcafe/

https://github.com/DevExpress/testcafe

## Install Node.js

### Mac

https://nodejs.org/ja/download/

```
brew install nodebrew
```

インストールできるバージョンの確認

```
nodebrew ls-remote
```

install stable version

```
nodebrew install-binary stable
```

enable installed node version

```
nodebrew use [version]
```


though path (zsh)

```
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zprofile
```

restart terminal

```
% node -v
v14.15.0
```

WARNING: Have to Restart Computer.

### Windows

Download installer from https://nodejs.org/ja/download/ 

## generate package.json (package-lock.json to package.json)

```
npm init
```

### install package from package.json


```
npm install
```

## install Testcafe

```
npm install testcafe --save-dev
```


### Opening Testcafe

```
npx testcafe chrome ./testcafe/hogehoge.ts
```

(recommend this command in windows)

## Configuration

https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html

Write ```.testcaferc.json```

```
npm install ffmpeg --save-dev
```


## install typescript

```
npm install -g typescript
```

Write ```"tsc": "./node_modules/.bin/tsc"``` in scripts of package.json.


write below string in tsconfig.json

```
  "include": [
    "cypress/*/*.ts"
  ]
```


## take video (using ffmpeg)

```
    "videoPath": "reports/screen-captures",
    "videoOptions": {
        "singleFile": true,
        "failedOnly": true,
        "pathPattern": "${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.mp4"
    },
    "videoEncodingOptions": {
        "r": 20,
        "aspect": "4:3"
    },
```


## Fill console.log Colors


https://www.npmjs.com/package/colorts

```
npm i colorts
```


## how to check image rotation

## percy

https://docs.percy.io/docs/testcafe

https://kenfdev.hateblo.jp/entry/2019/08/25/121740


## Run Tests on a Mobile Device

https://devexpress.github.io/testcafe/documentation/recipes/basics/test-on-remote-computers-and-mobile-devices.html

```
npx testcafe remote testcafe/hogehoge.ts --qr-code
```

## Logger

コンソールとファイルに、ログを同時出力。

```
npm i log4js @types/log4js --save-dev
```

https://scrapbox.io/jiro4989/log4js%E3%81%AE%E6%97%A5%E4%BB%98%E3%83%AD%E3%83%BC%E3%83%AC%E3%83%BC%E3%83%88%E3%82%92%E8%A9%A6%E3%81%9D%E3%81%86%E3%81%A8%E3%81%97%E3%81%A6%E3%83%89%E3%83%8F%E3%83%9E%E3%82%8A%E3%81%97%E3%81%9F


## testcafe runner

```
npm test
```

write to test files package.json

part of below.

```
  "scripts": {
    "test": "ts-node testcafe/test_runner.ts"
  },
```


## testcafe reporter

https://github.com/DevExpress/testcafe-reporter-spec

```
npm install testcafe-reporter-spec
```

https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#reporter

```
{
    "reporter": [
        {
            "name": "spec"
        },
        {
            "name": "json",
            "output": "reports/report.json"
        }
    ]
}
```


```
npx testcafe chrome 'testcafe/test_screenshots.ts'
```
