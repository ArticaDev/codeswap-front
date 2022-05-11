<script>
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import "highlight.js/styles/github.css";

  onMount(() => {
    hljs.highlightAll();
  });

  export let code;
</script>

<h2 class="text-4xl text-orange-500">{code.title}</h2>
<pre><code class="text-left">{code.message}</code></pre>
<h4 class="text-xl text-orange-500 ">
  {code.description}
</h4>

<style>
  code {
    background-color: transparent;
    color: rgb(249 115 22);
  }
</style>
