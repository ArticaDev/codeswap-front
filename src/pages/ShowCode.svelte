<script>
  import UserCode from "../components/UserCode.svelte";
  import Title from "../components/Title.svelte";
  import Loading from "../components/Loading.svelte";
  export let id;

  const fetchUserCode = (async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    return await response.json();
  })();

  const fakeCode = {
    title: "Essa aqui vai pro Marcão",
    code: `  import UserCode from "../components/UserCode.svelte";
  import Title from "../components/Title.svelte";
  import Loading from "../components/Loading.svelte";
  export let id;

  const fetchUserCode = (async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    return await response.json();
  })();`,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  const copyUrlPage = () => {
    navigator.clipboard.writeText(window.location.href);
  };
</script>

<main
  class="grid grid-flow-row justify-center gap-5 hover:border-orange-500 w-96 mx-auto"
>
  <Title />
  {#await fetchUserCode}
    <Loading text="Loading..." />
  {:then data}
    <UserCode
      code={fakeCode.code}
      title={fakeCode.title}
      description={fakeCode.description}
    />
    <button
      class="p-3 border-2 rounded-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all focus:border-orange-500 text-lg text-orange-500"
      on:click={() => {
        copyUrlPage();
      }}>Swap Code</button
    >
  {/await}
</main>
