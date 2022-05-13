<script>
  import { Appwrite } from "appwrite";
  import { onMount } from "svelte";
  import UserCode from "../components/UserCode.svelte";
  import Title from "../components/Title.svelte";
  import Loading from "../components/Loading.svelte";
  export let id;
  let sdk = {};
  onMount(() => {
    sdk = new Appwrite();
    sdk.setEndpoint("http://137.184.150.182:8080/v1").setProject("code-swap");
  });
  const fetchUserCode = (async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let promise = sdk.database.getDocument('snippets', id);
    const response = await promise;
    return response;
  })();
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
      code={data.code}
      title={data.title}
      description={data.description}
    />
    <button
      class="p-3 border-2 rounded-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all focus:border-orange-500 text-lg text-orange-500"
      on:click={() => {
        copyUrlPage();
      }}>Swap Code</button
    >
  {/await}
</main>