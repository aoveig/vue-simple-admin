# vue-simple-admin 模版

## 开始

```
pnpm install // 安装依赖包
pnpm dev     // 启动项目
```

## 路由

## 主题

## css

项目使用了即时按需的原子级 css：`unocss`
在`uno.config.ts`中配置样式
具体操作查看官方文档[unocss](https://unocss.dev/)

## 图标库

统一的图标框架`iconify`
已内置`element-plus`的图标`@iconify-icons/ep`
若是想要再添加其他图标库请前往[iconify](https://icon-sets.iconify.design/)查看想要添加的图标库然后安装对应的包
例如：

```
pnpm add @iconify-icons/ep -D
```

## 组件库

采用了 element-plus 组件库
导入方式为按需导入
