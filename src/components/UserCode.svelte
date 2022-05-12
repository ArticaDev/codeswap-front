<script>
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import "highlight.js/styles/an-old-hope.css";

  export let title;
  export let code;
  export let description;

  onMount(() => {
    hljs.highlightAll();
  });
</script>

<h2 class="text-4xl text-orange-500">{title}</h2>
<pre><code class="text-left">{code}</code></pre>
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
