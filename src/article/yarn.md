## steup
* 官网下载.msi文件安装(推荐)
* npm install -g yarn(这种方式下全局添加其他包比如webpack时不能直接使用命令)
* 在cmd中查看 yarn -v
  
## 如何使用cli
* cmd
* vs code 的终端中(这里要注意是否是cmd类型)
* git bash

## 初始化
* yarn init, 会生成一个package.json文件

## 添加包
* yarn add packagename
* eg.
    * yarn add webpack
    * yarn add webpack@1.22.4, 指定版本号
    * yarn add webpack@
    * yarn add webpack --dev, 添加到开发依赖
* yarn global add packagename, 全局安装
* 本地安装和全局安装的区别
  * 全局安装可以在项目根目录中直接使用命令
  * 本地安装在项目根目录中使用命令会提示"不是内部或外部命令"
  * 本地安装使用命令的方式:
    * 1 在package.json中配置scripts -- ` "see":"webpack -v"`, 然后在项目根目录中通过 yarn run see查看
    * 2 进入路径:项目根目录/node_modules/.bin, 发现webpack.cmd, 然后使用webpack -v查看
      

## 升级包
* yarn upgrade packagename

## 移除包
* yarn remove packagename

## 安装package.json中全部的依赖
* yarn install