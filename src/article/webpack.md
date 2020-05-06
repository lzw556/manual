## 一 是什么
* 静态模块打包器, 所有的代码以js为驱动, 都可以看成是模块
* 打包过程:
  * 1 从入口文件(必须是js文件)开始, 引入所有的依赖(js/sass/img等)并形成一个chunk
  * 2 分别处理chunk中的各种文件的过程叫做打包
  * 3 打包后输出的结果叫做bundle
* 五个核心概念
  * entry, 指示以哪个文件为入口开始打包
  * output, 指示打包后的bundle文件输出到哪里
  * loader, 处理非js文件(eg. .sass/img/.vue)
  * plugins
  * mode, 指示使用哪一种模式, 有production 和 development两种
## 二 可以干什么
  * 将.sass文件编译为css
  * 将ES6代码转换为ES5
## 三 setup
  * 依赖环境 nodejs, npm/yarn
  * webpack webpack-cli
  * 官网建议本地安装/和全局的区别
## 四 使用方式
  * cli命令 eg. webpack ./src/main.js -o ./build/built.js --mode=development
  * 配置文件(推荐)
    * entry, 指示webpack以那个文件为起点开始打包
        <br>string|array|object
        <br>单入口, chunk名称默认是main, 输出一个bundle
        <br>多入口, chunk名称是key, 每一个chunk输出一个bundle
    * output, 指定打包后的资源bundle输出到哪里
        <br>object
        <br>filename, 输出bundle的文件名和路径
        <br>path, 输出资源的公共路径
        <br>publicPath, 所有资源引用时的公共路径前缀, 和输出路径无关
    * module, 指定各种loader规则, 让webpack能够处理非js文件, 因为webpack只能处理js
        <br>object
        * 每一个loader规则语法:
            * test, 一般是正则, 表示匹配的文件, （这个值不要加引号）
            * loader, 使用单个loader
            * options
            * use, 数组, 使用多个loader, 顺序从右向左
            * exclude, 排除检查的文件
            * include, 只检查的文件
            * enforce
            <br>pre, 优先执行
            <br>post, 延后执行
            * oneof, 所有规则只会生效一个
        * loader类型
            * css-loader(加载css文件), style-loader（生成style标签）
            * sass-loader（加载sass文件并编译成css文件）
            * file-loader（将文件转换为一个url）
            * url-loader（和file-loader一样，并且当文件大小满足条件时生成base64）
            * babel-loader(ES5 ES6)
    * plugins
        <br>array
        * html-webpack-plugin
        <br>作用: 在每次构建中自动生成html文件
        * clean-webpack-plugin
        <br>作用: 在每次构建中自动清空构建文件夹
        * webpack-dev-server
        <br>作用: 简单的web服务器, 能够实时重新加载 注意在目标文件夹中找不到编译后的文件
        * webpack-dev-middleware
    * devtool
        <br>inline-source-map, 开启source map功能, 将编译后的代码映射回原始源代码
    * mode
        <br>development, production
    * resolve 解析模块规则
        <br>alias, 模块路径别名
    * devServer,
        <br>contentBase
        <br>port:5000
        <br>host
        <br>open
        <br>hot, true表示开启HMR
        <br>proxy, 服务器代理, 解决开发环境下的跨越问题
        eg.
            proxy:{
                //一旦5000接受到/api/xxx的请求, 就自动转发到3000
                '/api':{
                    target: 'http://localhost:3000'
                }
            }
        <br>服务启动以后, 可以在命令行中通过ctrl+c来终止服务
        <br>实时打包时每一次生成的打包文件是在内存中的, 而非配置文件中的output下的文件
* 优化
    * development
        * 构建速度
            HMR, 一个模块发生变化, 只重新打包这一个文件, 而非重新打包所有
                样式文件, style-loader内部实现了
                js文件, 默认不能使用HMR功能
                    使用js代码开启
                        module.hot
                html文件, 不需要用
        * 代码调试
            source-map
    * production
        * 构建速度
            <br>oneof, 
            <br>babel缓存,
            <br>externals, 拒绝第三方的包被打包进bundle中
        * 运行性能
            <br>文件缓存(hash/chunkhash/contenthash), 主要操作的是output中的filename的值
            <br>tree shaking, 去除无用的代码来减少bundle文件的体积
            <br>前提: es6 module, mode:production
            <br>使用:在package.json中配置sideEffects
            <br>code split, 把一个体积较大的bundle分割为几个小的bundle
            <br>懒加载(延迟加载)/预加载
  
  * 生成环境配置目标
    * 处理css
      * 将css从js中提取处理(mini-css-extract-plugin)
      * 压缩(optimize-css-assets-webpack-plugin)
      * 兼容性(postcss)
    * 处理js
      * ES6 转换 ES5

            
    
