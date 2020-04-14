## steup
* npm install -g yarn
* 在cmd中查看 yarn --version
<br>如果是在vscode的终端中查看的，要注意是否是cmd

## 初始化
* yarn init, 会生成一个package.json文件

## 添加包
* yarn add packagename
* eg.
    * yarn add webpack
    * yarn add webpack@1.22.4, 指定版本号
    * yarn add webpack@
    * yarn add webpack --dev, 添加到开发依赖

## 升级包
* yarn upgrade packagename

## 移除包
* yarn remove packagename

## 安装package.json中全部的依赖
* yarn install