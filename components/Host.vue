<template>
  <div id='host'>
    <div class="content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, voluptatem aperiam deleniti aliquid fuga laborum! Eum vero iste molestiae, voluptate eos ullam officia consectetur maiores corporis debitis hic similique. Consectetur!</p>
    </div>
    <img src="~/assets/kevin.jpg" alt="Kevin's avatar">
  </div>
</template>

<style scoped>
#host {
  background: var(--hotpink);
  border: 5px solid var(--blue);
  box-shadow: 0.5em 0.5em 0 var(--blue);
  padding: 1rem;
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#host * {
  color: white;
}

.content {
  padding-right: 1em;
}

img {
  height: 8em;
  display: block;
}
</style>
