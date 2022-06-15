<template>
<div class="snakeGame d-flex justify-content-around ">
  <div class="align-self-center">Scores: {{ scores }}</div>

  <SnakeGame :cellSize="cellSize" :boardSize="boardSize" :speed="speed" :isPlaying="isPlaying" :stop="stop" :addScores="addScores" :scores="scores"></SnakeGame>

  <button
      class="btn btn-info align-self-center"
      id="play-btn"
      v-on:click="isPlaying ? stop() : start()"
  >{{ isPlaying ? "Stop" : "Play" }}</button>

</div>
</template>

<script>
import SnakeGame from "@/views/SnakeGame";
export default {
  name: "RanSanMoi",
  components: {
    SnakeGame
  },
  data() {
    return {
      cellSize: 20,
      boardSize: 20,
      speed: 10,
      scores: 0,
      isPlaying: false
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.scores = 0;
    },
    stop() {
      this.isPlaying = false;
    },
    addScores(scores) {
      this.scores += scores;
    }
  }
}
</script>

<style scoped>
.snakeGame{
  margin-top: 3%;
}
</style>