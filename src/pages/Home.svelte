<script>
  import { router } from "tinro";
  import Title from "../components/Title.svelte";
  let code = "";
  let title = "";
  let description = "";

  const sendCode = async () => {
		const response = await fetch('https://apicodeswap.tk', {
			method: 'POST',
			body: JSON.stringify({
        code,
        title,
        description,
      }),
      headers: {
        "content-type": "application/json"
      }
		})
    const identifier = await response.json();
    router.goto("/code/" + identifier.id);
  };
</script>

<main class="grid grid-flow-row justify-center gap-5 hover:border-orange-500">
  <Title />
  <div class="w-full grid grid-flow-row gap-5">
    <input
      class="outline-none w-full border-b-2 p-1 hover:border-orange-500 focus-within:border-orange-500 bg-transparent text-white  transition-colors"
      placeholder="Title"
      bind:value={title}
    />
    <textarea
      class="w-full h-80 border-2 rounded-sm p-2 bg-transparent outline-none hover:border-orange-500 focus:border-orange-500 text-white  transition-colors"
      placeholder="Insert your code here!"
      bind:value={code}
    />
    <textarea
      class="w-full h-20 border-2 p-2 hover:border-orange-500 bg-transparent focus:border-orange-500 outline-none text-white  transition-colors"
      placeholder="Description"
      bind:value={description}
    />
    <button
      class="p-3 border-2 rounded-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all focus:border-orange-500 text-lg text-orange-500"
      on:click={() => {
        sendCode();
      }}>Generate Shareable Code</button
    >
  </div>
</main>

<style>
  :root {
    font-family: "Segoe UI", sans-serif;
  }

  :global(body) {
    background-color: #111;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
