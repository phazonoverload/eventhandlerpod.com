<template>
  <div>
    <Header />
    <nuxt id='page' />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';
export default {
  components: {
    Header,
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
  font-family: 'Space Mono', monospace;
}

.w {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1em;
}

a {
  color: var(--blue);
  text-decoration: none;
}

a.theme {
  background: var(--pink);
  padding: 0.25em 0.5em;
  box-shadow: 0.25em 0.25em 0 var(--blue);
  border: 2px solid var(--blue);
}

@media screen and (max-width: 800px) {
  .m-hide {
    display: none;
  }
}
</style>
