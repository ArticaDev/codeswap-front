<script>
  import Loading from "../components/Loading.svelte";
  import Title from "../components/Title.svelte";
</script>

<main
  class="grid grid-flow-row justify-center items-center mt-5 lg:mt-20 gap-10"
>
  <Title />
  <Loading text="URL Not Found" />
</main>
