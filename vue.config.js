const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: './',//基本路径
    outputDir: 'dist',
    assetsDir: 'static',//放置生成的静态资源 (js、css、img、fonts) 的目录
    transpileDependencies: true,
    productionSourceMap: false,//生产环境是否生成 sourceMap 文件
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:4000",
                changeOrigin: true,
                ws: true,//用于支持websocket
                pathRewrite: { "^/api": "" },
            },
        },
        
    },
})
