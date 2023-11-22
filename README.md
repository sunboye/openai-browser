# openai_browers

## Project Introduction

该项目为[openai-self](https://github.com/sunboye/openai-self)在浏览器端的使用示例

    注意： 访问openai需要有外网权限

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```
    开发模式时，开启了本地代理 -- 默认由本地地址转发openai的地址(以下设置，仅在开发模式下生效)
    devServer.json文件
    ```
    "open": true, // 是否开启本地代理模式,默认开启
    "agent": "http://127.0.0.1:21882", // vpn地址，本地代理模式开启时，访问openai接口的代理服务器地址，同openai-self实例中的proxy参数，本地代理关闭时，访问openai接口走浏览器的代理服务
    "target": "https://api.openai.com", // 代理地址
    ```

### Compiles and minifies for production
```
yarn product
```

