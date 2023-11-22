<template>
  <div class="about">
    <button @click="getModels">连通测试</button>
    <button @click="back">返回</button>
    <ul>
      <li v-for="item in modelsList" :key="item.id">{{item.id}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import openAi from 'openai-self'
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      modelsList: [],
      openAiInstance: {}
    }
  },
  created() {
    this.openAiInstance = new openAi({
      apiKey: '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', // openai的api_Key：必填，可前往openai官网申请
      BASE_PATH: process.env.NODE_ENV === 'production' ? null : '/openapi'
      // proxy: 'http://127.0.0.1:21882', // 代理服务器地址：非必填，科学上网时需要
      // sourceDir: '', // 内容缓存地址：非必填，默认值为./openai_cache
      // organizationId: '' // 组织机构Id：非必填
    });
  },
  methods: {
    back() {
      this.$router.push('/')
    },
    getModels() {
      this.openAiInstance.getModels().then(res => {
        console.log(res)
        if (res.success) {
          this.modelsList = res.data
        } else {
          window.alert(res.msg || res.status)
        }
      })
    },
  },
}
</script>
