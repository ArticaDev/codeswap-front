<script>
  import { onMount } from "svelte";
  import FaRegCopy from "svelte-icons/fa/FaRegCopy.svelte";
  import FaCheckDouble from "svelte-icons/fa/FaCheckDouble.svelte";
  import hljs from "highlight.js/lib/common";
  import "highlight.js/styles/an-old-hope.css";

  export let title;
  export let code;
  export let description;

  let copied = false;

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    copied = true;
  };

  onMount(() => {
    hljs.highlightAll();
  });
</script>

<h2 class="text-4xl text-orange-500">{title}</h2>
<div class="border-orange-500 border-2">
  <pre><code class="text-left">{code}</code></pre>
  <button
    on:click={() => copyCode()}
    class="p-2 border-orange-500 border-2 rounded flex justify-center items-center m-2 ml-auto"
  >
    {#if copied}
      <div class="text-green-500 w-4 h-4">
        <FaCheckDouble />
      </div>
    {:else}
      <div class="text-orange-500 w-4 h-4">
        <FaRegCopy />
      </div>
    {/if}
  </button>
</div>
<h4 class="text-xl  text-white">
  {description}
</h4>

<style>
  code {
    background-color: transparent;
    color: rgb(249 115 22);
    max-width: 100vw;
  }
</style>
