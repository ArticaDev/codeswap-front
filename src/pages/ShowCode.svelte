<script>
  import { Appwrite } from "appwrite";
  import { onMount } from "svelte";
  import { copyToClipboard } from "../utils.js";
  import UserCode from "../components/UserCode.svelte";
  import Title from "../components/Title.svelte";
  import Loading from "../components/Loading.svelte";
  export let id;
  let sdk = {};
  let response;
  let copied = false;

  onMount(async () => {
    sdk = new Appwrite();
    sdk.setEndpoint("http://137.184.150.182:8080/v1").setProject("code-swap");
    response = await sdk.database.getDocument("snippets", id);
    return response;
  });

  const copyUrlPage = () => {
    copyToClipboard(window.location.href);
    copied = true;
  };
</script>

<main
  class="grid grid-flow-row justify-center gap-5 hover:border-orange-500 w-96 mx-auto"
>
  <Title />
  {#if response === undefined}
    <Loading text="Loading..." />
  {:else}
    <UserCode
      code={response.code}
      title={response.title}
      description={response.description}
    />
    <button
      class="p-3 border-2 rounded-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all focus:border-orange-500 text-lg text-orange-500"
      on:click={() => {
        copyUrlPage();
      }}>{copied ? "Copied" : "Swap Code"}</button
    >
  {/if}
</main>
