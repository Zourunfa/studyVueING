# vue所有基础语法部分


# 插值操作
##  Mustache
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516074545513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <h2>{{message}}</h2>
  <h2>{{message}}, 李银河!</h2>

  <!--mustache语法中,不仅仅可以直接写变量,也可以写简单的表达式-->
  <h2>{{firstName + lastName}}</h2>
  <h2>{{firstName + ' ' + lastName}}</h2>
  <h2>{{firstName}} {{lastName}}</h2>
  <h2>{{counter * 2}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      firstName: 'kobe',
      lastName: 'bryant',
      counter: 100
    },
  })

</script>
```
页面渲染结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516090739147.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)


## v-once
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516074652747.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
下面例子：当修改input框的值时，使用了v-once指令的p元素不会随之改变，而第二个p元素时可以随之改变的
```c
<div id="app">
  <p v-once>{{msg}}</p>  
  <!-- //msg不会改变 -->
  <p>{{msg}}</p>
  <p>
    <input type="text" v-model = "msg">
  </p>
</div>

<script src="../js/vue.js"></script>
<script type="text/javascript">
  let vm = new Vue({
    el : '#app',
    data : {
      msg : "hello"
    }
  });
</script>
```

## v-html
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516074733994.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## v-test
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516074809338.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## v-pre
![在这里插入图片描述](https://img-blog.csdnimg.cn/202005160749215.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## v-cloak
可以使用 v-cloak 指令设置样式，这些样式会在 Vue 实例编译结束时，从绑定的 HTML 元素上被移除。

当网络较慢，网页还在加载 Vue.js ，而导致 Vue 来不及渲染，这时页面就会显示出 Vue 源代码。我们可以使用 v-cloak 指令来解决这一问题。

```c
<div id="app" v-cloak>
  <h2>{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  // 在vue解析之前, div中有一个属性v-cloak
  // 在vue解析之后, div中没有一个属性v-cloak
  setTimeout(function () {
    const app = new Vue({
      el: '#app',
      data: {
        message: '你好啊'
      }
    })
  }, 1000)
</script>

```

# 绑定属性

## v-bind
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516080750576.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516080852652.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020051608090877.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## v-bind动态绑定class的多种方法

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516082253342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/202005160824218.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c


  <style>
    .active {
      color: red;
    }
  </style>
</head>
<body>

<div id="app">
  <!--<h2 class="active">{{message}}</h2>-->
  <!--<h2 :class="active">{{message}}</h2>-->

  <!--<h2 v-bind:class="{key1: value1, key2: value2}">{{message}}</h2>-->
  <!--<h2 v-bind:class="{类名1: true, 类名2: boolean}">{{message}}</h2>-->
  <h2 class="title" v-bind:class="{active: isActive, line: isLine}">{{message}}</h2>
  <h2 class="title" v-bind:class="getClasses()">{{message}}</h2>
  <button v-on:click="btnClick">按钮</button>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      isActive: true,
      isLine: true
    },
    methods: {
      btnClick: function () {
        this.isActive = !this.isActive
      },
      getClasses: function () {
        return {active: this.isActive, line: this.isLine}
      }
    }
  })
</script>

</body>

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516082703321.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

<div id="app">
  <h2 class="title" :class="[active, line]">{{message}}</h2>
  <h2 class="title" :class="getClasses()">{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      active: 'aaaaaa',
      line: 'bbbbbbb'
    },
    methods: {
      getClasses: function () {
        return [this.active, this.line]
      }
    }
  })
</script>
```

## v-bind动态绑定style

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516082824526.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)


```c
  <style>
    .title {
      font-size: 50px;
      color: red;
    }
  </style>
</head>
<body>

<div id="app">
  <!--<h2 :style="{key(属性名): value(属性值)}">{{message}}</h2>-->

  <!--'50px'必须加上单引号, 否则是当做一个变量去解析-->
  <!--<h2 :style="{fontSize: '50px'}">{{message}}</h2>-->

  <!--finalSize当成一个变量使用-->
  <!--<h2 :style="{fontSize: finalSize}">{{message}}</h2>-->
  <h2 :style="{fontSize: finalSize + 'px', backgroundColor: finalColor}">{{message}}</h2>
  <h2 :style="getStyles()">{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      finalSize: 100,
      finalColor: 'red',
    },
    methods: {
      getStyles: function () {
        return {fontSize: this.finalSize + 'px', backgroundColor: this.finalColor}
      }
    }
  })
</script>

</body>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516083048562.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)


```c
<div id="app">
  <h2 :style="[baseStyle, baseStyle1]">{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      baseStyle: {backgroundColor: 'red'},
      baseStyle1: {fontSize: '100px'},
    }
  })
</script>
```

# 计算属性

## 什么是计算属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516083232796.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <h2>{{firstName + ' ' + lastName}}</h2>
  <h2>{{firstName}} {{lastName}}</h2>

  <h2>{{getFullName()}}</h2>

  <h2>{{fullName}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      firstName: 'Lebron',
      lastName: 'James'
    },
    // computed: 计算属性()
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    },
    methods: {
      getFullName() {
        return this.firstName + ' ' + this.lastName
      }
    }
  })
</script>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516090853491.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## 计算属性的复杂操作
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516083359742.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <h2>总价格: {{totalPrice}}</h2>
  <h2>总价格: {{totalPrice}}</h2>
  <h2>总价格: {{totalPrice}}</h2>
  <h2>总价格: {{totalPrice}}</h2>

  <h2>总价格: {{getTotalPrice()}}</h2>
  <h2>总价格: {{getTotalPrice()}}</h2>
  <h2>总价格: {{getTotalPrice()}}</h2>
  <h2>总价格: {{getTotalPrice()}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      books: [
        {id: 110, name: 'Unix编程艺术', price: 119},
        {id: 111, name: '代码大全', price: 105},
        {id: 112, name: '深入理解计算机原理', price: 98},
        {id: 113, name: '现代操作系统', price: 87},
      ]
    },
    methods: {
      getTotalPrice: function () {
        let result = 0
        for (let i=0; i < this.books.length; i++) {
          result += this.books[i].price
        }
        return result
      }
    },
    computed: {
      totalPrice: function () {
        let result = 0
        for (let i=0; i < this.books.length; i++) {
          result += this.books[i].price
        }
        return result

        // for (let i in this.books) {
        //   this.books[i]
        // }
        //
        // for (let book of this.books) {
        //
        // }
      }
    }
  })
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/202005160909327.png)
## 计算属性的setter和getter
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516083545207.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <h2>{{fullName}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      firstName: 'Kobe',
      lastName: 'Bryant'
    },
    computed: {
      // fullName: function () {
      //   return this.firstName + ' ' + this.lastName
      // }
      // name: 'coderwhy'
      // 计算属性一般是没有set方法, 只读属性.
      fullName: {
        set: function(newValue) {
          // console.log('-----', newValue);
          const names = newValue.split(' ');
          this.firstName = names[0];
          this.lastName = names[1];
        },
        get: function () {
          return this.firstName + ' ' + this.lastName
        }
      },

      // fullName: function () {
      //   return this.firstName + ' ' + this.lastName
      // }
    }
  })
</script>

```

## 有了methods为什么还要有计算属性computed
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516083926294.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

# 事件监听

## v-on
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516084100318.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <h2>{{counter}}</h2>
  <!--<h2 v-bind:title></h2>-->
  <!--<h2 :title></h2>-->
  <!--<button v-on:click="counter++">+</button>-->
  <!--<button v-on:click="counter&#45;&#45;">-</button>-->
  <!--<button v-on:click="increment">+</button>-->
  <!--<button v-on:click="decrement">-</button>-->
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods: {
      increment() {
        this.counter++
      },
      decrement() {
        this.counter--
      }
    }
  })
</script>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516084200412.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

<div id="app">
  <!--1.事件调用的方法没有参数-->
  <button @click="btn1Click()">按钮1</button>
  <button @click="btn1Click">按钮1</button>

  <!--2.在事件定义时, 写方法时省略了小括号, 但是方法本身是需要一个参数的, 这个时候, Vue会默认将浏览器生产的event事件对象作为参数传入到方法-->
  <!--<button @click="btn2Click(123)">按钮2</button>-->
  <!--<button @click="btn2Click()">按钮2</button>-->
  <button @click="btn2Click">按钮2</button>

  <!--3.方法定义时, 我们需要event对象, 同时又需要其他参数-->
  <!-- 在调用方式, 如何手动的获取到浏览器参数的event对象: $event-->
  <button @click="btn3Click(abc, $event)">按钮3</button>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      abc: 123
    },
    methods: {
      btn1Click() {
        console.log("btn1Click");
      },
      btn2Click(event) {
        console.log('--------', event);
      },
      btn3Click(abc, event) {
        console.log('++++++++', abc, event);
      }
    }
  })

  // 如果函数需要参数,但是没有传入, 那么函数的形参为undefined
  // function abc(name) {
  //   console.log(name);
  // }
  //
  // abc()
</script>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516084333686.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <!--1. .stop修饰符的使用-->
  <div @click="divClick">
    aaaaaaa
    <button @click.stop="btnClick">按钮</button>
  </div>

  <!--2. .prevent修饰符的使用-->
  <br>
  <form action="baidu">
    <input type="submit" value="提交" @click.prevent="submitClick">
  </form>

  <!--3. .监听某个键盘的键帽-->
  <input type="text" @keyup.enter="keyUp">

  <!--4. .once修饰符的使用-->
  <button @click.once="btn2Click">按钮2</button>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    },
    methods: {
      btnClick() {
        console.log("btnClick");
      },
      divClick() {
        console.log("divClick");
      },
      submitClick() {
        console.log('submitClick');
      },
      keyUp() {
        console.log('keyUp');
      },
      btn2Click() {
        console.log('btn2Click');
      }
    }
  })
</script>
```


# 条件判断

## v-if

```c
<div id="app">
  <h2 v-if="isShow">
    <div>abc</div>
    <div>abc</div>
    <div>abc</div>
    <div>abc</div>
    <div>abc</div>
    {{message}}
  </h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      isShow: true
    }
  })
</script>
```

## v-if v-else

```c
<div id="app">
  <h2 v-if="isShow">
    <div>abc</div>
    <div>abc</div>
    <div>abc</div>
    <div>abc</div>
    <div>abc</div>
    {{message}}
  </h2>
  <h1 v-else>isShow为false时, 显示我</h1>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      isShow: true
    }
  })
</script>
```


## v-if v-else-if v-else

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516084532136.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

<div id="app">
  <h2 v-if="score>=90">优秀</h2>
  <h2 v-else-if="score>=80">良好</h2>
  <h2 v-else-if="score>=60">及格</h2>
  <h2 v-else>不及格</h2>

  <h1>{{result}}</h1>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      score: 99
    },
    computed: {
      result() {
        let showMessage = '';
        if (this.score >= 90) {
          showMessage = '优秀'
        } else if (this.score >= 80) {
          showMessage = '良好'
        }
        // ...
        return showMessage
      }
    }
  })
</script>
```

## 条件渲染的案例
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516084634319.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516085516222.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <span v-if="isUser">
    <label for="username">用户账号</label>
    <input type="text" id="username" placeholder="用户账号" key="username">
  </span>
  <span v-else>
    <label for="email">用户邮箱</label>
    <input type="text" id="email" placeholder="用户邮箱" key="email">
  </span>
  <button @click="isUser = !isUser">切换类型</button>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      isUser: true
    }
  })
</script>
```

## v-show和v-if的区别
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516085906546.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

# 循环遍历

## v-for遍历数组
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516085949401.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <!--1.在遍历的过程中,没有使用索引值(下标值)-->
  <ul>
    <li v-for="item in names">{{item}}</li>
  </ul>

  <!--2.在遍历的过程中, 获取索引值-->
  <ul>
    <li v-for="(item, index) in names">
      {{index+1}}.{{item}}
    </li>
  </ul>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      names: ['why', 'kobe', 'james', 'curry']
    }
  })
</script>

```
## v-for遍历对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516090244999.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

<div id="app">
  <!--1.在遍历对象的过程中, 如果只是获取一个值, 那么获取到的是value-->
  <ul>
    <li v-for="item in info">{{item}}</li>
  </ul>


  <!--2.获取key和value 格式: (value, key) -->
  <ul>
    <li v-for="(value, key) in info">{{value}}-{{key}}</li>
  </ul>


  <!--3.获取key和value和index 格式: (value, key, index) -->
  <ul>
    <li v-for="(value, key, index) in info">{{value}}-{{key}}-{{index}}</li>
  </ul>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      info: {
        name: 'why',
        age: 18,
        height: 1.88
      }
    }
  })
</script>

</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020051609065071.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 组件的key属性

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516091239773.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
```c

<div id="app">
  <ul>
    <li v-for="item in letters" :key="item">{{item}}</li>
  </ul>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      letters: ['A', 'B', 'C', 'D', 'E']
    }
  })
</script>
```
## 检测数组更新的响应式方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516091315771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <ul>
    <li v-for="item in letters">{{item}}</li>
  </ul>
  <button @click="btnClick">按钮</button>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      letters: ['a', 'b', 'c', 'd']
    },
    methods: {
      btnClick() {
        // 1.push方法
        // this.letters.push('aaa')
        // this.letters.push('aaaa', 'bbbb', 'cccc')

        // 2.pop(): 删除数组中的最后一个元素
        // this.letters.pop();

        // 3.shift(): 删除数组中的第一个元素
        // this.letters.shift();

        // 4.unshift(): 在数组最前面添加元素
        // this.letters.unshift()
        // this.letters.unshift('aaa', 'bbb', 'ccc')

        // 5.splice作用: 删除元素/插入元素/替换元素
        // 删除元素: 第二个参数传入你要删除几个元素(如果没有传,就删除后面所有的元素)
        // 替换元素: 第二个参数, 表示我们要替换几个元素, 后面是用于替换前面的元素
        // 插入元素: 第二个参数, 传入0, 并且后面跟上要插入的元素
        // splice(start)
        // splice(start):
        this.letters.splice(1, 3, 'm', 'n', 'l', 'x')
        // this.letters.splice(1, 0, 'x', 'y', 'z')

        // 5.sort()
        // this.letters.sort()

        // 6.reverse()
        // this.letters.reverse()

        // 注意: 通过索引值修改数组中的元素
        // this.letters[0] = 'bbbbbb';
        // this.letters.splice(0, 1, 'bbbbbb')
        // set(要修改的对象, 索引值, 修改后的值)
        Vue.set(this.letters, 0, 'bbbbbb')
      }
    }
  })


  // function sum(num1, num2) {
  //   return num1 + num2
  // }
  //
  // function sum(num1, num2, num3) {
  //   return num1 + num2 + num3
  // }
  // function sum(...num) {
  //   console.log(num);
  // }
  //
  // sum(20, 30, 40, 50, 601, 111, 122, 33)

</script>

```

# v-model

## v-model的基本试用

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200516091716796.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

<div id="app">
  <input type="text" v-model="message">
  {{message}}
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    }
  })
</script>
```
## v-model原理
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517161641623.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

<div id="app">
  <!--<input type="text" v-model="message">-->
  <!--<input type="text" :value="message" @input="valueChange">-->
  <input type="text" :value="message" @input="message = $event.target.value">
  <h2>{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    },
    methods: {
      valueChange(event) {
        this.message = event.target.value;
      }
    }
  })
</script>
```

## v-model结合radio
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517162014541.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <label for="male">
    <input type="radio" id="male" value="男" v-model="sex">男
  </label>
  <label for="female">
    <input type="radio" id="female" value="女" v-model="sex">女
  </label>
  <h2>您选择的性别是: {{sex}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      sex: '女'
    }
  })
</script>
```


## v-model结合checkbox
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517162304216.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

<div id="app">
 <h2>您的爱好是: {{hobbies}}</h2>

  <label v-for="item in originHobbies" :for="item">
    <input type="checkbox" :value="item" :id="item" v-model="hobbies">{{item}}
  </label>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      isAgree: false, // 单选框
      hobbies: [], // 多选框,
      originHobbies: ['篮球', '足球', '乒乓球', '羽毛球', '台球', '高尔夫球']
    }
  })
</script>
```
## v-model结合select
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517163338124.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

<div id="app">
  <!--1.选择一个-->
  <select name="abc" v-model="fruit">
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="榴莲">榴莲</option>
    <option value="葡萄">葡萄</option>
  </select>
  <h2>您选择的水果是: {{fruit}}</h2>

  <!--2.选择多个-->
  <select name="abc" v-model="fruits" multiple>
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="榴莲">榴莲</option>
    <option value="葡萄">葡萄</option>
  </select>
  <h2>您选择的水果是: {{fruits}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      fruit: '香蕉',
      fruits: []
    }
  })
</script>
```

## v-model修饰符

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517164004131.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

  <!--2.修饰符: number-->
  <input type="number" v-model.number="age">
  <h2>{{age}}-{{typeof age}}</h2>

  <!--3.修饰符: trim-->
  <input type="text" v-model.trim="name">
  <h2>您输入的名字:{{name}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      age: 0,
      name: ''
    }
  })

  var age = 0
  age = '1111'
  age = '222'
</script>

```

# 组件化开发

## vue组件化思想


![在这里插入图片描述](https://img-blog.csdnimg.cn/2020051716413946.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517164153363.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## 注册组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517164229232.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517164259449.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<script src="../js/vue.js"></script>
<script>
  // 1.创建组件构造器对象
  const cpnC = Vue.extend({
    template: `
      <div>
        <h2>我是标题</h2>
        <p>我是内容, 哈哈哈哈</p>
        <p>我是内容, 呵呵呵呵</p>
      </div>`
  })

  // 2.注册组件
  Vue.component('my-cpn', cpnC)

  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    }
  })
</script>
```

## 全局组件和局部组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517164605218.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <cpn></cpn>
</div>

<div id="app2">
  <cpn></cpn>
</div>

<script src="../js/vue.js"></script>
<script>
  // 1.创建组件构造器
  const cpnC = Vue.extend({
    template: `
      <div>
        <h2>我是标题</h2>
        <p>我是内容,哈哈哈哈啊</p>
      </div>
    `
  })

  // 2.注册组件(全局组件, 意味着可以在多个Vue的实例下面使用)
  // Vue.component('cpn', cpnC)

  // 疑问: 怎么注册的组件才是局部组件了?

  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    },
    components: {
      // cpn使用组件时的标签名
      cpn: cpnC
    }
  })

  const app2 = new Vue({
    el: '#app2'
  })
</script>
```

## 父组件和子组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517165035831.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <cpn2></cpn2>
  <!--<cpn1></cpn1>-->
</div>

<script src="../js/vue.js"></script>
<script>
  // 1.创建第一个组件构造器(子组件)
  const cpnC1 = Vue.extend({
    template: `
      <div>
        <h2>我是标题1</h2>
        <p>我是内容, 哈哈哈哈</p>
      </div>
    `
  })


  // 2.创建第二个组件构造器(父组件)
  const cpnC2 = Vue.extend({
    template: `
      <div>
        <h2>我是标题2</h2>
        <p>我是内容, 呵呵呵呵</p>
        <cpn1></cpn1>
      </div>
    `,
    components: {
      cpn1: cpnC1
    }
  })

  // root组件
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    },
    components: {
      cpn2: cpnC2
    }
  })
</script>

```

## 注册的语法糖
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517165214292.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <cpn1></cpn1>
  <cpn2></cpn2>
</div>

<script src="../js/vue.js"></script>
<script>
  // 1.全局组件注册的语法糖
  // 1.创建组件构造器
  // const cpn1 = Vue.extend()

  // 2.注册组件
  Vue.component('cpn1', {
    template: `
      <div>
        <h2>我是标题1</h2>
        <p>我是内容, 哈哈哈哈</p>
      </div>
    `
  })

  // 2.注册局部组件的语法糖
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    },
    components: {
      'cpn2': {
        template: `
          <div>
            <h2>我是标题2</h2>
            <p>我是内容, 呵呵呵</p>
          </div>
    `
      }
    }
  })
</script>
```
## 模板分离写法

```c
<div id="app">
  <cpn></cpn>
  <cpn></cpn>
  <cpn></cpn>
</div>

<!--1.script标签, 注意:类型必须是text/x-template-->
<!--<script type="text/x-template" id="cpn">-->
<!--<div>-->
  <!--<h2>我是标题</h2>-->
  <!--<p>我是内容,哈哈哈</p>-->
<!--</div>-->
<!--</script>-->

<!--2.template标签-->
<template id="cpn">
  <div>
    <h2>我是标题</h2>
    <p>我是内容,呵呵呵</p>
  </div>
</template>

<script src="../js/vue.js"></script>
<script>

  // 1.注册一个全局组件
  Vue.component('cpn', {
    template: '#cpn'
  })

  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    }
  })
</script>
```
## 组件不可以访问vue实例数据，有自己的数据保存地方

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517165701927.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517165906234.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)


```c
<div id="app">
  <cpn></cpn>
  <cpn></cpn>
  <cpn></cpn>
</div>

<!--1.script标签, 注意:类型必须是text/x-template-->
<!--<script type="text/x-template" id="cpn">-->
<!--<div>-->
  <!--<h2>我是标题</h2>-->
  <!--<p>我是内容,哈哈哈</p>-->
<!--</div>-->
<!--</script>-->

<!--2.template标签-->
<template id="cpn">
  <div>
    <h2>{{title}}</h2>
    <p>我是内容,呵呵呵</p>
  </div>
</template>

<script src="../js/vue.js"></script>
<script>

  // 1.注册一个全局组件
  Vue.component('cpn', {
    template: '#cpn',
    data() {
      return {
        title: 'abc'
      }
    }
  })

  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      // title: '我是标题'
    }
  })
</script>

```

## 为什么组件的data是一个函数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517170000908.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 父子组件的通信

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517170041824.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

### 父传子
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517170125419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020051717085658.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<div id="app">
  <!--<cpn v-bind:cmovies="movies"></cpn>-->
  <!--<cpn cmovies="movies" cmessage="message"></cpn>-->

  <cpn :cmessage="message" :cmovies="movies"></cpn>
</div>



<template id="cpn">
  <div>
    <ul>
      <li v-for="item in cmovies">{{item}}</li>
    </ul>
    <h2>{{cmessage}}</h2>
  </div>
</template>

<script src="../js/vue.js"></script>
<script>
  // 父传子: props
  const cpn = {
    template: '#cpn',
    // props: ['cmovies', 'cmessage'],
    props: {
      // 1.类型限制
      // cmovies: Array,
      // cmessage: String,

      // 2.提供一些默认值, 以及必传值
      cmessage: {
        type: String,
        default: 'aaaaaaaa',
        required: true
      },
      // 类型是对象或者数组时, 默认值必须是一个函数
      cmovies: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    methods: {

    }
  }

  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      movies: ['海王', '海贼王', '海尔兄弟']
    },
    components: {
      cpn
    }
  })
</script>

```


### 子传父
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517170927835.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517170947286.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

<!--父组件模板-->
<div id="app">
  <cpn @item-click="cpnClick"></cpn>
</div>

<!--子组件模板-->
<template id="cpn">
  <div>
    <button v-for="item in categories"
            @click="btnClick(item)">
      {{item.name}}
    </button>
  </div>
</template>

<script src="../js/vue.js"></script>
<script>

  // 1.子组件
  const cpn = {
    template: '#cpn',
    data() {
      return {
        categories: [
          {id: 'aaa', name: '热门推荐'},
          {id: 'bbb', name: '手机数码'},
          {id: 'ccc', name: '家用家电'},
          {id: 'ddd', name: '电脑办公'},
        ]
      }
    },
    methods: {
      btnClick(item) {
        // 发射事件: 自定义事件
        this.$emit('item-click', item)
      }
    }
  }

  // 2.父组件
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    },
    components: {
      cpn
    },
    methods: {
      cpnClick(item) {
        console.log('cpnClick', item);
      }
    }
  })
</script>
```

# slot插槽

## slot的基本使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517193006752.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<body>

    <div id="app">
        <cpn></cpn>
        <cpn><input type="text"></cpn>
    </div>
    <template id="cpn">
        <div>
            <h2>我是组件</h2>
            <p>我是组件，哈哈哈</p>
            <slot><button>按钮</button></slot>
        </div>
    </template>
    <script>

        const cpn = {
            template:'#cpn'
        }
        var vm = new Vue({
            el: '#app',
            data: {},
            methods: {},
            components:{
                cpn
            }
        });
    </script>
</body>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517193305256.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## 具名插槽
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517193404334.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c
<body>

    <div id="app">
        <cpn v-show="isShow"><span slot="center">标题</span></cpn>
    </div>
    <template id="cpn">
        <div>
            <slot><span>左边</span></slot>
            <slot name="center"><span>中间</span></slot>
            <slot><span>右边</span></slot>
        </div>
    </template>
    <script>
/**
父组件模板的所有东西都会在父级作用域内编译，子组件模板所有的东西都会在子级
作用域编译
*/

        const cpn = {
            template:'#cpn',
            data(){
                return{
                    isShow:true
                }
            }
        }
        var vm = new Vue({
            el: '#app',
            data: {
                isShow:false
            },
            methods: {},
            components:{
                cpn
            }
        });
    </script>
</body>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517193733672.png)

## 作用域插槽
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517193812375.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

```c

<body>

    <div id="app">
        <cpn></cpn>
        <cpn>
            <br>
            <br>
           <!-- 目的是获取子组件的pLanguage -->
          <template slot-scope="slot">
              <span v-for="item in slot.data">{{item}} - </span>
              <br>
            <span>{{slot.data.join(' - ')}}</span>
          </template>
        </cpn>
    </div>
    <template id="cpn">
        <div>
           <slot :data="pLanguages"><li v-for="item in pLanguages">{{item}}</li></slot>
        </div>
    </template>
    <script>
/**
父组件替换插槽的标签，但是内容是由子组件来提供
*/

        const cpn = {
            template:'#cpn',
            data(){
                return{
                   pLanguages: ['javascript','c++','go','java']
                }
            }
        }
        var vm = new Vue({
            el: '#app',
            data: {
                isShow:false
            },
            methods: {},
            components:{
                cpn
            }
        });
    </script>
</body>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200517194235810.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

# vue-cli全面复习

@[toc]
## 什么是vue
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521074020221.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## vue cli的使用前提
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521074035870.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020052107411715.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## vue cli的安装和初始化项目步骤
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521074155342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
 **在命令行输入 vue init webpack 项目名  之后出现以下画面**


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521074426627.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

# vue cli2详细教程
## vue cli 项目目录结构介绍

**注意这里是vue cli 2 项目  vue cli3 好像配置文件放置的位置不同之外，还有一些简化**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521074627829.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
**Runtime-Compiler和Runtime-only的区别**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521074818157.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521074855933.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## Vue程序运行过程
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521074950582.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## render函数的使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521075048495.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## npm run build 详解执行意义
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521075121536.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## npm run dev 执行意义
**注意这是vue  cli 2的执行程序命令，vuecli3的执行命令是npm run serve**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521075255601.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 修改配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020052107553956.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

# vue cli3详解
## 与cli 2 的区别
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521075756719.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## 创建项目过程

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521075816746.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 目录结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521075848812.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## vue ui 和配置文件的位置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521075926781.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 怎样配置文件别名
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521075951221.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)





# vue router全面详细知识点

本片文章是自学b战coderwhy老师的自己写的笔记 ，如有侵权会马上删除
@[toc]
# 认识路由
## 什么是路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080240586.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 后断路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080340340.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 前端路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020052108040135.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

### 前端路由的规则
#### url的hash
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080438151.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
#### HTML5的history模式
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080450374.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080502286.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080513646.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
# vue router基础
## 什么是vue router
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080708663.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 安装和使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080756374.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## 如何创建一个router实例
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080900969.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 挂载到vue实例中
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080932112.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 具体使用router创建实例的过程
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521080955212.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081105528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081146117.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081202741.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
# 细节处理
## 路由的默认路径
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081245450.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 设置HTML5的history模式
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081321592.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 详解router-link
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020052108134580.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 如和修改linkActiveClass
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020052108143434.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 实现路由代码跳转
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081505477.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 如何创建动态路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081542757.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
# 路由的懒加载
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020052108161888.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081730392.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 三种方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081759874.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
# 路由嵌套

## 什么是路由嵌套
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081838316.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 路由嵌套的实现步骤
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081922707.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
**在home路由的内部创建children属性**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521081959329.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
**在home.vue**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082119828.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
**效果**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082155357.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 嵌套路由的默认路径（重定向）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082231883.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
# 传递参数
## 准备工作
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082435938.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## 传递参数的方式
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082506416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082518305.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082528624.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
## 获取参数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082608194.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
##   $router和$route的区别
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082718727.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

# 导航守卫

## 为何使用导航守卫
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082808676.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## 使用导航守卫
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082826254.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521082851854.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
# keep-alive
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200521083028779.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

# vuex核心内容及重点细节总结

@[toc]
## vuex简介
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423113239729.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423113256212.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## vuex的状态管理

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423113517165.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423113346683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020042311341348.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## vuex几大核心内容

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423113622925.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
**store文件夹的index.js文件 使用vuex的步骤**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200424115605455.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)




### state模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423113717474.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
**state就是保存一些变量，所有vue的组件都能共享**
```javascript
// 保存状态
  state: {
    counter:1000,
    students:[
      {id:110,name:'lizhi',age:18},
      {id:111,name:'theshy',age:22},
      {id:112,name:'zouxinxin',age:38},
    ],
    info:{
      name:"caixukun",
      hobbis:['rap','basketball'],
      age:22
    }
  },
```

### mutations模块

#### mutations怎么传递参数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423113937373.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)


#### mutations提交风格
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423114018601.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

#### mutations响应规则
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423113126856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
####  mutations常量类型细节编程
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423123330682.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423123444883.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
####  mutations同步函数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200424084655535.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
### getters模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200424115937622.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)
### Actions模块

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200424101858998.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)


### module模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200424092139395.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200424101837298.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM0MjEwNQ==,size_16,color_FFFFFF,t_70)

## 详细代码

### store/index.js

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

import {
  INCREMENT
} from './mutations-types'

// 1，安装插件
Vue.use(Vuex)

// 2，创建并导出对象

// 2.1创建module对象
const moduluA = {
  state: {
    name: 'Sutter'
  },
  mutations: {
    UpdateName(state,payload){
      state.name = payload
    }

  },
  actions: {
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('UpdateName','wangf')
      },1000)
     
    }
  },
  getters: {
    fullname(state){
      return state.name+ '11111'
    },
    fullName(state,getters){
      return getters.fullname + '2222'
    },
    newFullname(state,getters,rootState){
      return getters.fullName+rootState.info.name
    }
  }
}



export default new Vuex.Store({
  // 保存状态
  state: {
    counter:1000,
    students:[
      {id:110,name:'lizhi',age:18},
      {id:111,name:'theshy',age:22},
      {id:112,name:'zouxinxin',age:38},
    ],
    info:{
      name:"caixukun",
      hobbis:['rap','basketball'],
      age:22
    }
  },
  // mutation 转变
  mutations: {
    // 方法 默认参数state
    [INCREMENT](state){
      state.counter++
    },
    decreament(state){
      state.counter--
    },
    increCount(state,payload){
      console.log(payload);
      
      state.counter += payload.count
    },
    addStudent(state,student){
      state.students.push(student)
    },
    updateInfo(state) {
      Vue.set(state.info,'address','beijing') //添加属性
      Vue.delete(state.info,'age') //删除属性
       // 错误的代码，不能在这里进行异步操作
      // setTimeout(()=>{
        // state.info.name = Sutter
      // },1000)
      state.info.name="Sutter"
    },
  },
  actions: {
    // context上下文编程翻译
    // aUpdateInfo(context,payload){
    //   setTimeout(()=>{
    //     context.commit('updateInfo')
    //     // console.log(payload);
    //     console.log(payload.param);
    //     payload.successed()       
    //   },1000)
    // },
    aUpdateInfo(context,payload){
     return  new Promise((resolve,reject)=>{
       setTimeout(()=>{
         context.commit('updateInfo')
         console.log(payload);
         resolve("action.params")   
       },1000)
     })
    }
  },
  getters: {
    powerCounter(state){
      return state.counter*state.counter
    },
    moreTwenty(state,getters){
      return state.students.filter(s =>{
        return s.age>getters.moreAge
      })
    },
    moreTwentyLen(state,getters){
      return getters.moreTwenty.length
    },
    moreAge(state){
    //   return function(age){
    //     return state.students.filter(s =>{
    //       return s.age>age
    //     })
    //   }

    return age =>{
      return state.students.filter(s => s.age >age)
    }
    }
  },
  modules: {
    a: moduluA
  }
})

```



### HelloWorld.vue

```javascript
<template>
  <div class="hello">

    <h2>module中内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName('paul')">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
     <h2>{{$store.getters.fullName}}</h2>
     <h2>{{$store.getters.newFullname}}</h2>
     <button @click="asyncName()">异步修改</button>
    <h2>---------------------------------</h2>
     
      
    <h2>{{$store.state.counter}}</h2>
    <button @click="add()">+</button>
    <button @click="reduce()">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addStu({id:111,name:'123',age:12})">添加学生</button>

    <h2>-------------------------------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>

    <h2>--------------</h2>
    <h2>{{$store.getters.moreTwentyLen}}</h2>

    <h2>---------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">添加信息</button>
  </div>
</template>

<script>
import {
  INCREMENT
} from '../store/mutations-types'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // computed:{
  //   moreTwenty(){
  //     return this.$store.state.students.filter(s =>{
  //       return s.age>20
  //     })
  //   }
  // },
  methods: {
    add(){
      // 拿到store对象进行提交commit
      console.log(INCREMENT);
      
      this.$store.commit(INCREMENT)
    },
    reduce(){
      this.$store.commit('decreament')
    },
    addCount(num){
      // payload 负载
      // 普通的提交风格
      // this.$store.commit('increCount',num)

      // 特殊的提交风格
      this.$store.commit({
        type:'increCount',//事件类型.
        count:num

      })
    },
    addStu(student){
      this.$store.commit('addStudent',student)
    },
    // updateInfo(){
    // //  this.$store.commit('updateInfo')
    // this.$store.dispatch('aUpdateInfo',{
    //     param:"我是参数",
    //     successed(){
    //       console.log("传入成功");
          
    //     }
      
    // })
    // }
     updateInfo(){
    //  this.$store.commit('updateInfo')
    this.$store
    .dispatch('aUpdateInfo','携带的params')
    .then(res=>{
      console.log("里面完成了回调");
      
      console.log(res);
      
    })
    },
    updateName(param){
      this.$store.commit('updateName',param)
    },
    asyncName(){
      this.$store.dispatch('aUpdateName')
    }
  },

}
</script>

<style scoped>

</style>

```
### App.vue

```javascript
<template>
  <div id="app">
   <h2>{{$store.state.counter}}</h2>
   <h2>{{$store.getters.moreAge(0)}}</h2>
   <!-- <h2>{{$store.getters.moreAge(10)}}</h2> -->
   <h2>---------------------------------</h2>
   <HelloWorld></HelloWorld>
  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld' 

export default {
  name:"app",
  components:{
    HelloWorld
  }
}
</script>

<style>
</style>
```
### mutations-types.js

```javascript
export const INCREMENT = 'increment'
```