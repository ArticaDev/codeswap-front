<script>
  import hljs from "highlight.js";
  import "highlight.js/styles/github.css";
  import FaShareAlt from "svelte-icons/fa/FaShareAlt.svelte";
  let code = "";
</script>

<main class="grid grid-flow-row justify-center gap-5 hover:border-orange-500">
  <div
    class="text-orange-600 flex justify-center items-center h-40 mt-20 gap-5 w-full"
  >
    <div class="lg:w-12 w-6">
      <FaShareAlt />
    </div>
    <h1 class="lg:text-8xl text-5xl">Swapcode</h1>
  </div>
  <div class="w-full grid grid-flow-row gap-5">
    <input
      class="outline-none w-full border-b-2 p-1 hover:border-orange-500 bg-transparent text-white  transition-colors"
      placeholder="Title"
    />
    <textarea
      class="w-full h-80 border-2 rounded-sm p-2 bg-transparent outline-none hover:border-orange-500 focus:border-orange-500 text-white  transition-colors"
      placeholder="Insert your code here!"
      on:change={() => hljs.highlightAll()}
      bind:value={code}
    />
    <textarea
      class="w-full h-20 border-2 p-2 hover:border-orange-500 bg-transparent focus:border-orange-500 outline-none text-white  transition-colors"
      placeholder="Description"
    />
    <button
      class="p-3 border-2 rounded-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all focus:border-orange-500 text-lg text-orange-500"
      >Generate Shareable Code</button
    >
  </div>
</main>

<style>
  :root {
    font-family: "Segoe UI", sans-serif;
  }

  :global(body) {
    background-color: #222;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-weight: 100;
  }
</style>
