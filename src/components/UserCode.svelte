<script>
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import "highlight.js/styles/an-old-hope.css";

  onMount(() => {
    hljs.highlightAll();
  });

  export let code;
</script>

<h2 class="text-4xl text-orange-500">{code.title}</h2>
<pre><code class="text-left">{code.content}</code></pre>
<h4 class="text-xl  text-white">
  {code.description}
</h4>

<style>
  code {
    background-color: transparent;
    color: rgb(249 115 22);
    max-width: 100vw;
  }
</style>
