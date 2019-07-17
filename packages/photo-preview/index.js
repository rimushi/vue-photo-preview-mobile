// 导入组件，组件必须声明 name
import PhotoPreview from './src/photo-preview.vue'

// 为组件提供 install 安装方法，供按需引入
PhotoPreview.install = function (Vue) {
  Vue.component(PhotoPreview.name, PhotoPreview)
}

// 默认导出组件
export default PhotoPreview