##不完全解决ios浏览器页面滚动到底部或顶部后导致页面局部滑动失效的问题


###安装
```js
npm i ios-scroll-supply -S

```

###使用
```js
//在node环境下，我们通过以下方式调用
// 引用(eg. 在工程的main.js下)
import iosScrollSupply from 'ios-scroll-supply';
iosScrollSupply(className); // className为需要滑动的部分的类名


//如果只是在html页面通过script的方式调用
// html
<script src='ios-scroll-supply/index.js'></script>
// js
if (window.iosScrollSupply) console.log('this is my iosScrollSupply!'); 
iosScrollSupply(className); // className为需要滑动的部分的类名

```


