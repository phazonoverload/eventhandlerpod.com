<template>
  <div id='home'>
    <div id="hero">
      <div class="w">
        <h1>A podcast about running developer events</h1>
        <h2>Presented by <a href='https://underland.events'>Underland Events</a></h2>
      </div>
    </div>
    <Episodes />
  </div>
</template>

<script>
import Episodes from '~/components/Episodes';
export default {
  components: {
    Episodes
  }
}
</script>

<style scoped>
#hero {
  text-align: center;
  padding: 5em 0;
  border-bottom: 1px solid var(--pink);
}

#hero h1,
#hero h2 {
  font-weight: normal;
}

#hero h2 {
  margin-top: 0.5em;
}

#hero h2 a {
  background: var(--pink);
  color: var(--blue);
  padding: 0 0.25em;
  display: inline-block;
}

@media screen and (max-width: 800px) {
  #hero {
    padding: 1em 0;
  }
  #hero h1 {
    font-size: 1.25em;
  }
  #hero h2 {
    font-size: 1em;
  }
}
</style>
