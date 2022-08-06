/*
 * @Description: 
 * @Date: 2022-07-31 22:41:33
 * @LastEditTime: 2022-08-06 13:19:12
 * @FilePath: \vue2-review\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve(__dirname, 'src/')
      }
    }
  }
})
