## 5、react应用qiankun改造

1、yarn add react-app-rewired，重写配置文件  
2、修改package.json中启动脚本  
3、重写配置文件，config-overrides.js  
4、设置.env，默认web端口和socket端口是3000  
5、至此基座加载vue和react都ok

## 碰到问题

### 无法加载logo.svg

没有办法，改为加载jpg就OK

yarn add react-router-dom