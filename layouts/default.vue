<template>
  <div>
    <div class='w'>
      <Header />
      <!-- <Host /> -->
      <nuxt id='page' />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Host from '~/components/Host';
import Footer from '~/components/Footer';
export default {
  components: {
    Header,
    Host,
    Footer
  }
}
</script>

<style>
:root {
  --orange: #F26A2D;
  --blue: #0347EB;
  --pink: #FCDFE3;
  --hotpink: #FF2153;
  --cyan: #09E7E2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: url('~assets/tile.png');
  background-size: 250px;
  font-family: 'Space Mono', sans-serif;
  font-weight: normal;
  color: var(--blue);
  padding-bottom: 6em;
}

.w {
  max-width: 960px;
  margin: 2em auto;
  padding: 0 1em;
}

#page {
  background: var(--pink);
  border: 5px solid var(--blue);
  box-shadow: 0.5em 0.5em 0 var(--blue);
  padding: 1em;
}
</style>
