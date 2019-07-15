<template>
  <header>
    <div class="w">
      <n-link to='/' class='logo'>
        <img src="~/assets/logo.svg" alt="event.Handler() Logo">
      </n-link>
      <a href="https://airtable.com/shrAUsZpKwxfH9DVc" class='theme'>Request a Topic</a>
      <a href="https://twitter.com/eventHandlerPod" class='theme m-hide'>Twitter</a>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 1em 0;
  border-bottom: 1px solid var(--pink);
}

header .w {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.logo {
  margin-right: auto;
  margin-left: 0;
}

.logo img {
  height: 4em;
}

a {
  margin-left: 2em;
}

@media screen and (max-width: 800px) {
  a.theme {
    font-size: 0.8em;
  }
}
</style>
