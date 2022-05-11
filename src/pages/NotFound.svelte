<script>
  import FaCircle from "svelte-icons/fa/FaCircle.svelte";
  import Title from "../components/Title.svelte";
</script>

<main class="grid grid-flow-row justify-center items-center mt-20 gap-10">
  <Title />
  <h1 class="text-5xl text-orange-500 text-center">URL Not Found</h1>
  <div class="lg:w-12 w-6 animate-ping text-orange-500 mx-auto">
    <FaCircle />
  </div>
</main>
