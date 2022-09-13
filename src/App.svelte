<script>
  import { Route } from "tinro";
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import ShowCode from "./pages/ShowCode.svelte";
</script>

<svelte:head>
  <script
    async
    defer
    data-website-id="0757d8d0-7922-4345-978d-89cf9ec79aa5"
    src="https://analytics.articadev.com/umami.js"></script>
</svelte:head>

<main>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/404">
    <NotFound />
  </Route>
  <Route path="/code/:id" let:meta>
    <ShowCode id={meta.params.id} />
  </Route>
  <Route fallback redirect="/404" />
</main>
