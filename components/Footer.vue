<template>
  <footer>
    <p>Presented by Underland - a developer events company.</p>
    <a href="https://underland.xyz">
      <img src="~/assets/underland.svg" alt="Underland Logo">
    </a>
  </footer>
</template>

<style scoped>
footer {
  background: var(--pink);
  border-top: 2px solid var(--blue);
  color: blue;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
}

footer p {
  padding-right: 1em;
}

footer img {
  height: 2em;
  display: block;
}

@media screen and (max-width: 800px) {
  footer {
    flex-direction: column-reverse;
    text-align: center;
    padding: 1em;
  }
  footer p {
    font-size: 0.8em;
    margin-top: 1em;
  }
}
</style>
