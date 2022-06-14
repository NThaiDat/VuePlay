<template>
  <div class="row">
    <div class="col-2" v-for="n in listThe" :key="n">
      <br>
      <the-game :the="n" @click="KiemTraThe(n.id)"></the-game>
    </div>

  </div>
</template>

<script>
import TheGame from "@/views/TheGame";

export default {
  name: "LatThe",
  data() {
    return {
      isDone: false,
      the1: '',
      the2: '',
      count: 0,
      listThe: [
        {
          id: 0,
          value: -1,
          isActive: false,
          isComplete: false,
        },
        {
          id: 1,
          value: -1,
          isActive: false,
          isComplete: false,
        },
        {
          id: 2,
          value: -1,
          isActive: false,
          isComplete: false,
        },
        {
          id: 3,
          value: -1,
          isActive: false,
          isComplete: false,
        },
        {
          id: 4,
          value: -1,
          isActive: false,
          isComplete: false,
        }, {
          id: 5,
          value: -1,
          isActive: false,
          isComplete: false,
        }, {
          id: 6,
          value: -1,
          isActive: false,
          isComplete: false,
        }, {
          id: 7,
          value: -1,
          isActive: false,
          isComplete: false,
        }, {
          id: 8,
          value: -1,
          isActive: false,
          isComplete: false,
        },
        {
          id: 9,
          value: -1,
          isActive: false,
          isComplete: false,
        },
        {
          id: 10,
          value: -1,
          isActive: false,
          isComplete: false,
        },
        {
          id: 11,
          value: -1,
          isActive: false,
          isComplete: false,
        },
      ]
    }
  },
  components: {TheGame},
  methods: {
    KiemTraThe: function (id) {
      this.count++;
      if (this.count >= 3) {
        return;
      } else {
        this.listThe[id].isActive = !this.listThe[id].isActive;
        if (this.count <= 2) {
          if (this.the1 === '') {
            this.the1 = this.listThe[id].id;
          }
          this.the2 = this.listThe[id].id;
        }
        if (this.count === 2) {
          setTimeout(this.TinhDiem, 1000);
        }
      }
      // console.log(this.count)
      // console.log(this.the1 + " " + this.the2)
    },
    resetThe: function () {
      this.count = 0;
      this.listThe[this.the1].isActive = false;
      this.listThe[this.the2].isActive = false;
      this.the1 = '';
      this.the2 = '';
      // console.log(this.count)
      // console.log(this.the1 + " " + this.the2)
    },
    TinhDiem: function () {
      if (this.listThe[this.the1].value === this.listThe[this.the2].value) {
        this.listThe[this.the1].isComplete = true;
        this.listThe[this.the2].isComplete = true;
        this.count = 0;
        this.the1 = '';
        this.the2 = '';
        if (this.checkComplete()){
          alert('Bạn đã hoàn thành trò chơi này');
        }
        // console.log("done")
      } else {
        this.resetThe();
      }
    },
    checkComplete: function () {
      for (let i = 0; i < this.listThe.length; i++) {
        if (this.listThe[i].isComplete === false) {
          return false;
        }
      }
      return true;
    }
  },
  created() {
    for (let i = 0; i < this.listThe.length; i++) {
      let x=Math.floor(Math.random() * 12);
      while (this.listThe[x].value!=-1){
        x++;
        if(x>=this.listThe.length){
          x=0;
        }
      }
      this.listThe[x].value=parseInt(i/2);
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>