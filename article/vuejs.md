## Vue实例
* 通过Vue创建一个Vue实例时, 需要传入一个option对象作为参数
* option选项
    * DOM
        * el, string/HTMLElement, 指定一个DOM元素, 作为Vue实例的挂载目标
        * template
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
