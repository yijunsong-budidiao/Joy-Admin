# 开箱即用的 Vue 3.2 + TypeScript + Pinia + Vite2 + Element-Plus 管理系统框架

## 前言 📖

> Joy Admin，是基于 Vue3.2、TypeScript、Vite2、Pinia、Element-Plus 开源的一套后台管理模板，目前利用空余时间开发。整个项目还有很多地方不完善，后期会持续更新。项目中有很多地方写得不是很好，希望大家能多提宝贵意见。后续会不断迭代 🎀🎀🎀

## 为什么开发这个管理系统？🤷‍♂️

> 1、主要是学习下 Vue3 + TypeScript
> 2、其他人写的都太庞大，架构设计没有好坏，适合自己的才是最好的

## 一、在线预览 👀

- Link：https://yijunsong-budidiao.github.io/Joy-Admin （有点卡，毕竟没钱买服务器 🤣）

## 二、Git 仓库地址 (喜欢给个 Star⭐)

- GitHub：https://github.com/yijunsong-budidiao/Joy-Admin
- Gitee：https://gitee.com/yi-junsong/Joy-Admin

## 三、🔨🔨🔨 项目功能

- 🌲 使用 Vue3.2 开发（单文件组件 `＜script setup＞`）
- ♻️ 采用 Vite2 作为项目开发、打包工具（配置了 Gzip 打包、TSX 语法、跨域代理、打包预览工具……）
- 🌳 整个项目集成了 TypeScript （完全是为了想学习 🤣）
- 🍁 使用 Pinia🍍 替代 Vuex，轻量、简单、易用（香啊~🤤 集成了持久化插件）
- 🍂 使用 TypeScript 对 Axios 整个二次封装 （全局错误拦截、常用请求封装、全局请求 Loading、取消重复请求……）
- 🍃 对表格的所有操作基本都封装成了 Hooks （表格数据搜索、重置、查询、分页、多选、单条数据操作、文件上传、下载、格式化单元格内容……）
- 🌴 支持 Element 组件大小切换、暗黑模式、i18n 国际化（i18n 暂时没配置所有文件，根据项目自行配置）
- 🪓 使用 vue-router 进行路由权限拦截（403 页面）、页面按钮权限配置
- 🌵 使用 keep-alive 对整个页面进行缓存，支持多级嵌套页面（缓存路由里可配置、页面切换带动画）
- 🏕️ 常用自定义指令开发（复制、水印、拖拽、节流、防抖、长按……）
- 🌄 使用 Prettier 统一格式化代码

## 四、安装使用步骤

- **Clone：**

```text
# GitHub
git clone https://github.com/yijunsong-budidiao/Joy-Admin.git
# Gitee
git clone https://gitee.com/yi-junsong/Joy-Admin.git

或者去复制ssh方式也可以
```

- **Install：**

```text
npm install
cnpm install

# npm install 安装失败，请升级 nodejs 到 16 以上，或尝试使用以下命令：
npm install --registry=https://registry.npm.taobao.org

```

- **Run：**

```text
npm run dev
```

- **Build：**

```text
# 开发环境
npm run build:dev

# 测试环境
npm run build:test

# 生产环境
npm run build:pro
```

- **Lint：**

```text
# eslint 检测代码
npm run lint:eslint

# prettier 格式化代码
npm run lint:prettier

```

## 五、项目截图

### 1、登录页：

![login_light](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220617054532_login_light.png)

![login_dark](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220617054611_login_dark.jpg)


### 2、表格页：

![table_light](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220617054617_table.jpg)

![table_dark](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220617055359_table_dark.jpg)


### 3、Echarts：

![echarts_light](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220617054604_echarts.jpg)

![echarts_dark](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220617055350_echarts_dark.jpg)


### 4、数据大屏：

![data_screen](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220617055019_data_screen.jpg)

## 六、文件资源目录 📚

```text
Joy-Admin
├─ .github                # CI 发布配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ enums               # 项目枚举
│  ├─ hooks               # 常用 Hooks
│  ├─ language            # 语言国际化
│  ├─ layout              # 框架布局
│  ├─ routers             # 路由管理
│  ├─ store               # pinia store
│  ├─ styles              # 全局样式
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 工具库
│  ├─ views               # 所有页面
│  ├─ App.vue             # 入口页面
│  ├─ env.d.ts            # ts 识别 vue 文件
│  └─ main.ts             # 入口文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ index.html             # 入口 html
├─ LICENSE                # 开源协议
├─ package-lock.json      # 包版本锁
├─ package.json           # 包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```

## 七、浏览器支持

> 默认支持以下浏览器，vue3.2 不支持 IE 浏览器 (PS: 听说ie浏览器已经结束了自己跌宕起伏的一生了😝)。更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)
>
> **💢 请不要使用 QQ 浏览器开发，QQ 浏览器 不识别 某些 ES6 以上语法**

| ![Edge](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Edge.png) | ![Firefox](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Firefox.png) | ![Chrome](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Chrome.png) | ![Safari](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Safari.png) |
| :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
|                              last 2 versions                              |                                 last 2 versions                                 |                                last 2 versions                                |                                last 2 versions                                |

## 八、项目后台接口 🧩

> 项目后台接口完全采用 Mock 数据  
> 推荐一个在线 Mock 平台： https://www.fastmock.site/

## 九、推荐网站

> emoji 平台： https://emojixd.com/
