<script lang="ts">
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<main>
  <h1>Admin Panel</h1>
  <div class="card">
    <button on:click={increment}>
      Count is {count}
    </button>
  </div>
  <p>Welcome to the Quick House Hub Admin Panel</p>
</main>

<style>
  main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .card {
    padding: 2rem;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    color: white;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
