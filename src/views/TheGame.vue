<template>
  <div class="theGame">
    <img :src="getPic(the.value)" v-if="the.isActive" v-show="the.isComplete==false" class="hinhThe">
    <img src="../assets/img/MatSau.png" v-else class="hinhThe">
  </div>
</template>

<script>
export default {
  name: "TheGame",
  data() {
    return {
      srcImg: '',
    }
  },
  methods: {
    getPic (name) {
      return require("@/assets/img/Anh"+name+".jpg")
    }
  },
  props: {
    the: Object,
  },
  mounted() {

  }
}
</script>

<style scoped>
.hinhThe {
  width: 100%;
  height: 100%;

}

.complete {
  visibility: hidden;
}

.theGame {
  width: 100%;
  height: 90%;
  margin: 2%;
}
</style>