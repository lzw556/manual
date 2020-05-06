## 使用vuejs的方式
* 1 常规即下载js文件然后在页面中通过script标签引入
* 2 yarn安装
  * 2.1 yarn add vue, 安装
  * 2.2 import Vue from 'vue', 引入

## Vue实例
* 通过Vue创建一个Vue实例时, 需要传入一个option对象作为参数
* option选项
    * DOM
        * el, string/HTMLElement, 指定一个DOM元素, 作为Vue实例的挂载目标
          <br>注意创建vue实例的js代码顺序:必须写在DOM元素加载完成之后
        * template, 如果同时指定el和template, 那么template会替换el
        * render
    * data
        * data, 指定数据对象, 内部会将data的属性转换为getter/setter
        * computed, 计算属性, 缓存一个值, 只有依赖值发生改变才会重新计算
            * 命名, 不要加动词, 因为要当属性来使用
            * 完整语法, 一个对象, 包含一个get()和set()
            * 使用时直接用属性名, 后面不用加(), 因为相当于调用其get()方法
            * 和使用method的区别在于多次调用时, computed属性只在第一次被调用, 而method每一次都会被调用
        * watch, eg. {a : handler}, 属性a发生变化后调用handler
        * methods, 可以在指令中使用
        * props, 用来接受父组件的值
    * 生命周期钩子
        * beforeCreate
        * created
        * beforeMount
        * mounted
        * beforeUpdate
        * updated
        * beforeDestroy
        * destroyed
    * 资源
        * directives
        * filters
        * components
    * 组合
        * parent
        * mixins
        * extends
        * provide/inject
* 实例属性
    * $el
    * $data
    * $props
    * $options
    * $parent
    * $children
* 实例方法
    * $watch()
    * $set()
    * $delete()
    * $on()
    * $once()
    * $off()
    * $emit()
    * $mount, 手动挂载一个Vue实例
    * $forceUpdate()
    * $nextTick()
    * $destroy()

## directive
* v-text, 插值, 更新元素的 textContent; 如果只更新部分 textContent, 需要使用Mustache语法{{}}
* v-html, 插值, 更新元素的 innerHTML
* v-bind
    * syntax, v-bind:href 
    * 缩写, :href
    * 绑定class
      * 此时指令值可以指定一个对象, syntax: {className1 : true, classNames : false}
      * eg. {active: true, big : true}, value是true的className1会出现在DOM的class列表中
    * 绑定style
      * 此时指令值可以指定一个对象, syntax: {propName1 : propValue1, propName2 : propValue2}
      * eg. {color: "red", fontSize: "16px"}, 注意此时propName命名风格必须是fontSize(IDL attribute)
* v-on
    * syntax, v-on:click
    * 缩写, @click
    * 指令值是函数名时, 唯一参数就是event对象; 指令值是内联语句时, event对象通过$event访问
    * 修饰符, v-on:submit.prevent, 可用值(stop/prevent/capture/self/once/passive/enter)
        * stop, 停止冒泡
        * prevent, 阻止默认行为
        * once, 回调只触发一次
        * keyCode/keyAlias, eg. @keyup.13  eg.@keyup.enter
        * self, currentTarget === target时才触发

* v-if/v-else/v-else-if

    如果想切换多个元素, 可以在template标签上使用v-if

    不推荐和v-for一起使用

    key
* v-show
切换实际上改变的是css属性display的值, 需要非常频繁地切换时使用
* v-for
    * 遍历数组

        v-for="item in items"

        v-for="(item, index) in items"

    * 遍历对象属性

        v-for="value in object"

        v-for="(value, name) in object"

        v-for="(value, name, index) in object"
    * 数组更新检测

      使用以下方法操作数组, View会自动更新
      push()/pop()/shift()/unshift()/splice()/sort()/reverse()
* v-model
    <br>当用于text时, v-model的值接受一个string值
    <br>当用于radio时, v-model的值接受一个string值, 处于同一组中的控件v-model要相同
    <br>当用于checkbox时,
    <br>单个, v-model的值接受一个boolean值
    <br>多个, v-model的值接受一个数组
    <br>当用于select时, v-model的值接受一个string值
    <br>修饰符
    * lazy, 用change事件取代input事件
    * number, 输入字符串转为有效的数字
    * trim, 去除首尾空格
* v-solt

## 对象变更检测
不能检测对象属性的添加/删除

## Vue中的MVVM
* View层, 通常是DOM
* Model层, 基本上data对象
* ViewModel层, 相当于Vue实例
    * DataBindings, 可以把data对象中的数据绑定到DOM上, 而且是响应式的. 当数据改变时DOM自动更新
    * DOM listners, 监听DOM变化, 然后通过回调更新数据

## component
* 组件相当于一个Vue实例，在构造时除了el之外，其他的参数和创建Vue实例一样
* 组件的data必须是一个函数
* template，组件的模板, 需要在最外层包裹一个div
* 注册组件（组件要用在哪里就需要在哪里注册，和交保护费一样）
    * 全局注册
      <br>Vue.component()，可以在所有Vue根实例和其子组件中使用
    * 局部注册
      <br>定义在组件的components中，只能在该组件内部使用
* 父子组件
    * 父子组件之间的各自的数据默认独立
    * 把父组件的数据传递给子组件
        * 子组件的props中定义 自定义属性
        * 在子组件的标签上使用v-bind:自定义属性, 绑定父组件中的数据
        * 然后在子组件的模板中可以像使用其自身data数据一样使用自定义属性
    * 把子组件的数据传递给父组件
        * 子组件中通过this.$emit派发一个自定义事件
        * 然后在子组件的标签上使用v-on:自定义事件，绑定父组件中的method
    * 在父组件中访问子组件
        * 在子组件的标签上添加ref属性
        * 在父组件中通过this.$refs[ref属性值]来访问子组件实例

## slot，[sla:t]，插槽
* 在组件的模板中通过slot标签定义一个插槽，可以在开始标签和结束标签之间定义默认值
* 在子组件的开始标签和结束标签内部定义内容来替换slot
* 命名插槽
    * 一个组件模板中定义了多个slot
    * 每一个slot通过添加name属性来区分
    * 在子组件的开始标签和结束标签内部定义内容来替换slot时，通过添加slot属性来精准替换插槽

## 通过模块化的思想来使用vue
* demo项目文件结构
  * dist/
  * src/
    * main.js
  * index.html
* 通过 yarn add vue 来安装vue
* index.html
  * 编写以id=app为包裹元素的模板html代码
  * 通过script标签引入打包后的bundle.js
* main.js
  * 通过import导入
  * 创建一个Vue实例并挂载到id=app的DOM上
* 配置webpack
  * 通过 yarn add webpack webpack-cli webpack-dev-server 来安装webpack
  * 新建webpak.config.js
    * 配置入口为./src/main.js
    * 配置出口为./dist/bundle.js
    * 配置resolve(是因为runtime.only的问题)
    * 在package.json中配置 webpack 使用的 scripts: build和dev
    * 为什么要使用webpack打包
      * 在index.html页面中通过`<script type="module" src="vue.esm.js">`来加载, 测试不成功
* 单文件组件
    * 安装vue-loader vue-template-compiler
      * 如果vue-loader版本大于15开头则需要配置一个插件VueLoaderPlugin
      <br>`const VueLoaderPlugin = require('vue-loader/lib/plugin')`
    * 配置loader

## Vue-router
* 使用步骤:
  * 安装
  * 搭建
      * 在项目中创建router文件夹, 当前目录下新建index.js, 用来配置所有的路由规则
        * index.js
          * 导入VueRouter
          * 1 Vue.use(VueRouter)
          * 2 创建VueRouter实例, 注意在用对象增强写法时数组的变量名必须是routes
            * 此时路由默认hash模式, 从url上可以看出这点
            * 可以通过mode:"history"修改为history模式
          * 3 导出
      * 3 在根实例上挂载导出, 注意在用对象增强写法时导入的别名必须是router
  * 使用
      * router-link
        * 1 router-link是在Vue-router中注册的全局组件
        * 2 通过传入 `to` 属性指定链接
        * 3 router-link默认会被渲染为a标签, 通过tag="button"可以渲染为button
        * 4 通过添加replace属性可以取消前进和回退
      * router-view, 路由匹配到的组件将渲染在这里
  * 通过代码进行跳转
    * $router.push("/home"), 其中$router指向路由对象
  * 路由嵌套
    * children
  * 路由懒加载
    * 目的, 对业务代码进行分割, 按需加载; 当路由被访问的时候才加载对应组件
    * 在rules中定义 `component: () => import("/* webpackChunkName: "group-foo" */ ../xx.vue")`
    * 然后在webpack的config中配置babel-loader
  * 路由传递参数
    * 1 通过url参数的形式
      * 在rules中定义 /user/:id
      * 在router-link中使用 /user/12
      * 在user组件中获取 $route.params.id, 其中$route指向当前路由对象
    * 2 通过url的queryString的形式
      * rules中定义 /profile
      * router-link中 :to = {path:'/profile', query:{id:12}}
      * 在profile组件中通过$route.query对象接受
  * 路由守卫
    * 全局守卫
      * router.beforeEach
      * 定义在路由配置的index.js中
    * 路由守卫, 
      * beforeEnter
      * 定义在rules中
    * 组件路由
      * beforeRouteEnter
  * keep-alive组件, 保持组件状态, 阻止多次创建销毁
    * exclude属性, 值为组件的name
  * 配置路径别名
    在html中使用前面要加上~


## Vuex, 好像应用程序级单例对象
* 使用和Vue-router一样
* Vuex实例
  * state, 用来存放信息
    * 通过$store.state.xx来访问
    * 更新state状态的唯一方式就是commit mutation
  * mutations, 用来更新state
    * 里面定义方法(必须是同步), 方法默认参数是state
    * 在组件中使用时要使用$store.commit(方法名, params)来提交更新
    * Vue.set()/Vue.delete(), 将后追加的属性变成响应式属性/响应式删除属性
    * 常量类型, 新建mutation-type.js
  * getters, store中的计算属性, 类比组件中的计算属性
    * 里面定义方法, 方法默认参数是state
    * 在组件中通过$store.getters.xx来访问
    * getters可以传递参数, 组件中通过$store.getters.xxx()
  * actions
    * 用处, 异步操作不能定义在mutation中的, 可以放在action中
    * 里面定义方法的默认参数是context, 这个context即$store
    * 通过context.commit(方法名)
  * modules
* store文件夹下可以分多个文件mutations.js, getters.js, actions



## 打包
* app, 业务代码
* manifest, 底层支撑代码
* vendor, 第三方代码