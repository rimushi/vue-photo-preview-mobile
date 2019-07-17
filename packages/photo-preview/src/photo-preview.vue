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
  props:['msg']
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
