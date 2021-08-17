## 5、react应用qiankun改造

1、yarn add react-app-rewired，重写配置文件  
2、修改package.json中启动脚本  
3、重写配置文件，config-overrides.js  
4、设置.env，默认web端口和socket端口是3000  
5、至此基座加载vue和react都ok，yarn start启动  

## 6、react加路由

1、yarn add react-router-dom  
2、App.js加路由  

## 碰到问题

### 无法加载logo.svg

实际是public_path路径问题，视频中路径不对，应为'http://localhost:20000/reactApp/'  


