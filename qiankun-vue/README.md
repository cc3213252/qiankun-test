## 3、vue子应用qiankun改造

1、router/index.js中改BASE_URL为/vue  
2、main.js中需要把应用打包成类库  
3、配置打包vue.config.js
打包成umd模式，可以让window挂载的模式   
4、npm run serve / localhost:10000
至此基座调vue子应用也会成功

## 4、实现父往子传值，消除eslint告警

1、应用中mount加载时把props记日志  
2、基座中应用注册时传值props  

## 碰到问题

### __webpack_public_path__ is not defined

eslint中需要配置全局变量  
```js
"eslintConfig": {
    ...,
    "globals": {
      "__webpack_public_path__": true
    }
}
```