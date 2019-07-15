<template>
  <div>
    <n-link class='episode' :to='details.url' v-if='details.live'>
      <img :src="art" alt="Episode art">
      <div class="meta">
        <h2>{{details.title}}</h2>
        <p>{{details.date}}</p>
      </div>
    </n-link>

    <div v-else class='episode'>
      <img :src="art" alt="Episode art">
      <div class="meta">
        <h2>{{details.title}}</h2>
        <p>Coming soon</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    art() {
      return `/episode-art/${this.details.art}.png`
    }
  },
  props: ['details']
}
</script>

<style scoped>
.episode {
  border: 1px solid var(--pink);
}
img {
  width: 100%;
}
.meta {
  padding: 0.5rem 1rem 1rem;
}
h2 {
  font-size: 1em;
}
</style>