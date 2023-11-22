<template>
  <div class="home">
    <span>apikeys：</span>
    <input v-model="apiKey" placeholder="输入apikey" type="text" style="width: 420px"/>
    <br/>
    <button @click="getModels">请求测试</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import openAi from 'openai-self'
import { decode } from 'js-base64';
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      apiKey: 'c2stUjBueEhJR3JxTnhleWo1dTN2OGpUM0JsYmtGSklUbzRoZmxMSTNQRlpYQ3hNV3Zp'
    }
  },
  created() {
    // github 直接提交明文 apikey 会导致当前apikey不可用，所以默认apikey为base64编码之后的字符串
    this.apiKey = this.apiKey && this.apiKey.length === 68 ? decode(this.apiKey) : this.apiKey
  },
  methods: {
    getModels() {
      if (this.apiKey) {
        window.$openAi = new openAi({
          apiKey: this.apiKey, // openai的api_Key：必填，可前往openai官网申请
          BASE_PATH: process.env.NODE_ENV === 'production' ? null : process.env.proxy ? '/openapi' : null
          // proxy: 'http://127.0.0.1:21882', // 代理服务器地址：非必填，科学上网时需要
          // sourceDir: '', // 内容缓存地址：非必填，默认值为./openai_cache
          // organizationId: '' // 组织机构Id：非必填
        });
        this.$router.push('/about')
      } else {
        window.alert('apikey 不能为空')
      }
    }
  }
}
</script>
<style>
.home {
  margin-top: 5%;
}
</style>