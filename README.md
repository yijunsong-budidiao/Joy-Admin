# ✨✨ 开箱即用的 Vue 3.2 + TypeScript + Pinia + Vite2 + Element-Plus 管理系统 🌠🌠

## 感谢 🙏

- 本项目基于 SpicyBoy 的开源项目 Geeker-Admin 开源项目开发的，附上作者链接 https://github.com/HalseySpicy, 非常感谢。
#### 最近新增功能组件
+ amap 高德地图api （目前支持地图坐标查询功能）
+ codemirror 实现编辑器 （目前支持常用语言渲染，后续会不断更新）
+ driver.js 实现新手引导（功能简单，好上手）
+ markdown 插件使用

#### OSCS 社区的安全徽章

[![OSCS Status](https://www.oscs1024.com/platform/badge/yijunsong-budidiao/Joy-Admin.svg?size=small)](https://www.oscs1024.com/project/yijunsong-budidiao/Joy-Admin?ref=badge_small)

## 前言 📖

> Joy Admin，目前利用空余时间开发。整个项目还有很多地方不完善，后期会持续更新。项目中有很多地方写得不是很好，希望大家能多提宝贵意见。后续会不断迭代 🎀🎀🎀

## 此管理系统的意义 🤷‍♂️

> 1、vue3 + typescript 结合使用，可以多锻炼一下自己的ts能力
>
> 2、逐步添加更多好用的功能，也同时能把自己工作中用到的技术记录下来

## 一、在线预览 👀

- Link：https://yijunsong-budidiao.github.io/Joy-Admin （有点卡，毕竟没钱买服务器 🤣）

## 二、Git 仓库地址 (喜欢给个 Star⭐)

- GitHub：https://github.com/yijunsong-budidiao/Joy-Admin
- Gitee：https://gitee.com/yi-junsong/Joy-Admin

## 三、项目主要功能 🔨

- 🔨 原生canvas画布案例，实现简单的画布绘画功能
- 🔨 高德地图api使用，目前支持地图搜索功能
- 🔨 vue-cropper插件实现裁剪图片功能
- 🔨 markdown插件使用（@kangc/v-md-editor）
- 🔨 codemirror实现编辑器功能，目前常见的开发语言都支持，暂时还没有代码提示
- 🔨 driver.js实现新手引导
- 🌲 Vue3.2 开发，3.2支持单文件组件 `＜script setup＞`，使用vite也能直接把name定义到标签上
- ♻️ Vite2作为打包工具，开发效率更高，运行速度更快（配置了 Gzip 打包、TSX 语法、跨域代理、打包预览工具……）
- 🌴 Element-Plus作为ui组件，实现暗黑模式，国际化
- 🪓 vue-router实现路由相关配置
- 🌵 keep-alive 对整个页面进行缓存，附带页面动画
- 🌳 项目集成了 TypeScript
- 🍁 Pinia 替代 Vuex作为状态管理，更简单，支持浏览器持久化
- 🍂 Axios作为http请求插件，封装了请求拦截，跳转路由取消请求
- 🌄 Prettier 统一格式化代码
- 😸 大家希望我增加什么功能也可以给我邮件留言 yijunsong666@163.com。后续功能会越来越多，敬请期待。。。

## 四、项目新功能截图 ✌️ (截图gitee暂时显示不了，因为权限问题，懂得都懂😉)

##### 高德地图
![map](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220621083918_map.jpg)
##### markdown
![markdown](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220621084243_markdown.jpg)
##### 截取图片
![cropper](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220621084312_cropper.jpg)
##### canvas画布
![canvas](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220621084756_canvas.jpeg)
##### 新手引导
![guide](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220806015717_guide.jpg)

## 五、安装使用步骤 🚅

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
│  ├─ language            # 语言国际化配置
│  ├─ layout              # 框架布局管理
│  ├─ routers             # 路由管理
│  ├─ store               # pinia实现状态管理
│  ├─ styles              # 全局样式
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 工具类库
│  ├─ views               # 页面管理
│  ├─ App.vue             # 跟组件
│  ├─ env.d.ts            # ts 识别 vue 文件
│  └─ main.ts             # 入口文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.github            # 发布github配置
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

## 七、浏览器支持 🔎

> 默认支持以下浏览器，vue3.2 不支持 IE 浏览器 (PS: 听说ie浏览器已经结束了自己跌宕起伏的一生了😝)。
>
> 更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)

| ![Edge](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220622111348_edge.png) | ![Firefox](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220622111318_firefox.png) | ![Chrome](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220622111245_chrome.png) | ![Safari](https://images.cnblogs.com/cnblogs_com/blogs/754047/galleries/2166493/o_220622111414_safari.png) |
| :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
|                              last 2 versions                              |                                 last 2 versions                                 |                                last 2 versions                                |                                last 2 versions                                |

## 八、推荐链接 🔗

> emoji 平台： https://emojixd.com/
>
> 在线 Mock 平台： https://mock.mengxuegu.com/
>
> 推荐开源作者： https://github.com/HalseySpicy/
