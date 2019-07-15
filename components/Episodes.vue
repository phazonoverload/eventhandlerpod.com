<template>
  <div id='episodes' class='w'>
    <h2>Episodes</h2>
    <div class="episodes">
      <Episode v-for='ep in episodes' :key='ep.date' :details='ep' />
    </div>
  </div>
</template>


<script>
import Episode from '~/components/Episode';
export default {
  computed: {
    episodes() {
      return this.$store.state.episodes
    }
  },
  components: {
    Episode
  }
}
</script>

<style scoped>
h2 {
  font-weight: normal;
  text-align: center;
  margin: 1em 0;
}
.episodes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  margin-bottom: 2em;
}
@media screen and (max-width: 800px) {
  .episodes {
    grid-template-columns: 1fr;
  }
}
</style>
