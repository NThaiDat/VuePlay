<template>
 <div class="container">
   <home></home>
   <router-view/>
 </div>

</template>

<script>
import Home from "@/views/Home";
export default {
  components: {Home}
}

</script>
<style>

</style>
