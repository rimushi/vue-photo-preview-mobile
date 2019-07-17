# vue-photo-preview-mobile

> 简单的vue组件

## 安装

``` bash
$ npm install vue-photo-preview-mobile -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
import photoPreview from 'vue-photo-preview-mobile'
import 'vue-photo-preview-mobile/lib/vue-photo-preview-mobile.css'
Vue.use(photoPreview)
```

在项目中用使用 photoPreview


```js
<template>
  <photo-preview :msg ="msgTxt" />
</template>
<script>
  export default {
    data () {
      return {
        msgTxt: '你好'
      }
    }
  }
</script>
```

注意：标签为 `<photo-preview>`


## 参数

| 参数 | 说明 | 类型 | 
| ------ | ------ | ------ | 
| msg | 传入信息值 | String |





