<template>
  <div class="home">
    <Hello :msg="$store.state.demo.msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/Hello.vue";
import { getList } from "@/api/demo";

export default {
  name: "Home",
  components: {
    Hello
  },
  async mounted() {
    const data = await getList({ f: "ff" });
    console.log(data);
  }
};
</script>

<style scoped lang="less"></style>
