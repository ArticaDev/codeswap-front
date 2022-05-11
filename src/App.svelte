<script>
  import { Route } from "tinro";
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import ShowCode from "./pages/ShowCode.svelte";
</script>

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
