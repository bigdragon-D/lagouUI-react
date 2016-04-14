# LagouUI By REACT + WEBPACK + ES6 + LESS

## 使用方法

	1、git clone https://github.com/bigdragon-D/react-webpack.git 或者直接下载	2、初始化安装依赖  npm install
	3、本地运行       npm run dev
	4、浏览器打开     http://localhost:8080/
	4、打包          npm run build
	
### 主要技术


	1、ES6+LESS
	2、框架     react
	3、打包工具  webpack
	

#### 目录结构
```
·
├── demo      		--> 示例文件
│   ├── index.html
│   └── index.js
├── package.json
├── src				--> 源文件
│   ├── Button
│   │   ├── button.jsx
│   │   └── button.less
│   ├── Checkbox
│   │   ├── checkbox.jsx
│   │   └── checkbox.less
│   ├── Checkbox-Group
│   │   └── checkboxgroup.jsx
│   ├── Datepicker
│   │   ├── datepicker.jsx
│   │   └── datepicker.less
│   ├── Icon
│   │   ├── icon.jsx
│   │   └── icon.less
│   ├── Input
│   │   ├── input.jsx
│   │   └── input.less
│   ├── Input-Group
│   │   └── inputgroup.jsx
│   ├── Radio
│   │   ├── radio.jsx
│   │   ├── radio.less
│   │   └── radiogroup.jsx
│   ├── Select
│   │   ├── select.jsx
│   │   └── select.less
│   ├── Utils				 	   --> 工具类
│   │   ├── array.jsx
│   │   ├── clickOut.jsx
│   │   ├── datepicker.js
│   │   ├── dom.jsx
│   │   ├── errTips.jsx
│   │   ├── events.jsx
│   │   ├── lang.jsx
│   │   └── valid.jsx
│   ├── common				   --> 公共样式less文件
│   │   ├── errtips.less
│   │   ├── reset.less
│   │   ├── variables.less
│   │   └── vender.less
│   ├── fonts				       --> 字体文件
│   │   ├── fonts.png
│   │   ├── lagou.eot
│   │   ├── lagou.svg
│   │   ├── lagou.ttf
│   │   └── lagou.woff
│   └── main.js
├── webpack.config.js   	   --> 开发环境webpack 配置
└── webpack.config.prod.js    --> 生成环境webpack 配置
```