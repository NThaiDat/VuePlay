<template>
  <a href="/" style="text-decoration: none">
    <div id="hii"  >
    </div>
  </a>

  <div class="row" >
    <button class="btn" id="gameLatThe" @click="$router.push('/latthe')">Lật Thẻ</button>
    <button class="btn" id="gameLatThe" @click="$router.push('/Ran')">Rắn Săn Mồi</button>
  </div>


</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {

    return {
      color: "rgb(213,213,213)",

    }
  },
  methods: {
    ChangeColorVal: function (color) {
      let random = Math.random() * 255;
      color += random;
      if (color > 255) {
        color -= 255;
      }
      return color
    },
    ChangeColor: function () {
      let red = 123;
      let blue = 234;
      let green = 56;
      setInterval(
          () => {
            red = this.ChangeColorVal(red);
            blue = this.ChangeColorVal(blue);
            green = this.ChangeColorVal(green);
            this.color = "rgb(" + red + "," + blue + "," + green + ")";
           // console.log("<h2 id='proVip' style="+"'"+"color:"+this.color+"'"+">Ex Nope</h2>")
            document.getElementById("hii").innerHTML = "<h2 id='proVip' style=" + "'" + "color:" + this.color + "'" + ">Ex Nope</h2>"


          }
          , 500)

    }

  },
  created() {

    this.ChangeColor();
  },
  watch: {}

}
</script>

<style scoped>
#hii {
  text-align: center;
  margin-bottom: 2%;
}

#gameLatThe {
  background-image: linear-gradient(to right, cyan, hotpink);
  margin: auto;
  width: 20%;
  color: white;
  font-size: large;
  font-family: Bookman;
}
</style>