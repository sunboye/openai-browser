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
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      modelsList: []
    }
  },
  created() {},
  methods: {
    back() {
      this.$router.push('/')
    },
    getModels() {
      window.$openAI.getModels().then(res => {
        console.log(res)
        if (res.success) {
          this.modelsList = res.data || []
        } else {
          window.alert(res.msg || res.status)
        }
      })
    },
  },
}
</script>
