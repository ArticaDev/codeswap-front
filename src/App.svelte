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
    data-website-id="0936b575-7f94-4f4e-bb4e-6c78133bd796"
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
