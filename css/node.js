如何下载包

npm -v //查看版本号 

npm install jquery //下载jquery,安装小写的包

版本管理package.json文件

npm init //创建package文件


//如何根据package.json文件下载依赖项Dependence
npm i

//全局依赖包
npm install -g express	//安装express 全局

//生产环境依赖(更新package.json文件)
npm install -g express --save

//卸载包
npm uninstall -g express 

//更新
npm updata jquery

//基于nodejs http-server
npm install http-server -g

//如何使用http-server
http-server src(项目名)

使用ctrl+c 结束掉。


