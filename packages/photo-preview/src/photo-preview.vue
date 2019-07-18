<template>
  <div class="preview">    
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'PhotoPreview',
  data () {
    return {
    }
  },
  //props可以使数组也可以是对象，如果是对象，后面的是对应的类型
  // props: {'msg': String}
  props: ['msg']
}
</script>

<style>
.preview {
  width: 100%;
  height: 200px;
  padding-top: 20px;
  color: #fff;
  font-weight: bolder;
  background: red;
}
</style>
