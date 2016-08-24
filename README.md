# grunt-require-angular
一个简易的基于`grunt+require+angular`完整的前端工程项目。搭建教程可以点这里，[前后端分离之前端项目构建（grunt+require+angular）](http://luckykun.com/work/2016-05-02/grunt-angular.html)

down下来运行以下命令就可以直接看到效果：

```js
npm install grunt -g
npm install   //安装依赖
grunt  //启动服务
```

最后页面上的结果是（其余功能可以自行开发）：

```js
hello, world
```

现在要做到前端项目独立，这时候为了项目便于管理维护，我们就需要项目化，工程化，开发规范，自动化压缩混淆，自动化发布，前端优化等等。

现在前端框架这么丰富，一个项目要引入哪些框架，就因人而异了，工作以来一直在学习angular，所以最近自己尝试着搭了一套基于grunt+requireJs+angularJs的应用。
- grunt: 操作项目文件：比如文件转换、压缩、打包部署等等。
- requireJs: js库加载管理，支持按需加载，模块化引入。
- angularJs: js前端MVC框架，支持依赖注入、双向绑定等主要特性。

这几个库是现在中大型前端项目比较适合的搭配，很有必要去学习并掌握他们。
