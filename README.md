# 微前端步骤拆解

最小化系统一步步拆解qiankun，基座vue，分别加载vue、react应用，整合基座路由  
[视频地址](https://www.bilibili.com/video/BV1Dt4y1Q7KG?from=search&seid=15158153355170459552)  

- [基座应用拆解](qiankun-base/README.md)
- [vue应用拆解](qiankun-vue/README.md)
- [react应用拆解](qiankun-react/README.md)

## 服务启动

```bash
cd qiankun-base
npm run serve

cd qiankun-vue
npm run serve

cd qiankun-react
yarn start
```

## 拆解步骤学习

每个阶段性成果后会有一次git提交记录，可以直接checkout到这次提交，对比自己的步骤  
![提交记录](https://github.com/cc3213252/qiankun-test/raw/master/img/git-record.png)

## 服务展示

基座：  
![基座](https://github.com/cc3213252/qiankun-test/raw/master/img/base.png)

vue应用：  
![vue应用](https://github.com/cc3213252/qiankun-test/raw/master/img/vue.png)  

react应用：  
![react应用](https://github.com/cc3213252/qiankun-test/raw/master/img/react.png)

## 注意

vue创建项目时，注意选项，要带上Router  