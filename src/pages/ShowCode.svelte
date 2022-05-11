<script>
  import UserCode from "../components/UserCode.svelte";
  import Title from "../components/Title.svelte";
  export let id;

  const fetchUserCode = (async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    return await response.json();
  })();

  const copyUrlPage = () => {
    navigator.clipboard.writeText(window.location.href);
  };
</script>

<main class="grid grid-flow-row justify-center gap-5 hover:border-orange-500">
  <Title />
  {#await fetchUserCode}
    <p>esperando</p>
  {:then code}
    <UserCode {code} />
  {/await}
  <button
    class="p-3 border-2 rounded-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all focus:border-orange-500 text-lg text-orange-500"
    on:click={() => {
      copyUrlPage();
    }}>Copy Page Url</button
  >
</main>
