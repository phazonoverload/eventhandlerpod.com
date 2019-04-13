<template>
  <div class="top">
    <n-link to='/' class='logo'>
      <img src="~/assets/logo.svg" alt="event.Handler() Podcast">
    </n-link>
    <div class="content" >
      <h2>A podcast about running developer events</h2>
      <div class="icons">
        <a href="https://twitter.com/eventHandlerPod">
          <img src='~/assets/twitter.svg' alt='Twitter logo'>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
}

.top .logo img {
  max-width: 250px;
  margin: 0 auto;
  display: block;
}

.top .content {
  padding: 0.25em 0.25em 0.25em 0.5em;
}

.top .content h2 {
  background: var(--pink);
  color: var(--blue);
  text-transform: uppercase;
  padding-left: 0.5em;
}

.top .content p {
  text-align: right;
}

.top .icons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.top .icons img {
  width: 32px;
  margin-top: 0.5em;
  margin-left: 0.5em;
}

@media screen and (max-width: 800px) {
  .top {
    flex-direction: column;
  }
  .top .content {
    margin-top: 1em;
  }
  .top .icons {
    justify-content: center;
    margin-top: 1em;
  }
  .top .content h2 {
    text-align: center;
    font-size: 1.25em;
    padding: 0.25em;
  }
}
</style>
