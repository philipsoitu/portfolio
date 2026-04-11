<script lang="ts">
  import ProjectGrid from "$lib/ProjectGrid.svelte";
  import { projects } from "$lib/projects";
</script>

<main class="page">
  <h1>Hello, I am Philip</h1>

  <p>I like to code sometimes. I also like raccoons</p>

  <div class="links">
    <a href="/SoituPhilipCV.pdf">CV</a>
    <a href="https://github.com/philipsoitu">Github</a>
    <a href="https://www.linkedin.com/in/philip-soitu/">LinkedIn</a>
  </div>

  <ProjectGrid
    title="Projects"
    subtitle="thingamabobs and doohickeys that i made"
    {projects}
  />
</main>

<style>
  :global(body) {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3a3a3a;
    color: #f2f2f2;
    font-family: "Comic Relief", cursive;
  }

  .page {
    text-align: center;
    padding: 2.5rem 2rem 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: min(100%, 1040px);
    box-sizing: border-box;
  }

  p {
    margin: 0;
    font-size: 1.4rem;
    opacity: 0.9;
  }

  img {
    width: 200px;
    max-width: 60%;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  }

  @font-face {
    font-family: "Comic Relief";
    src: url("/fonts/ComicRelief-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Comic Relief";
    src: url("/fonts/ComicRelief-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  h1 {
    font-weight: 700;
  }

  .links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  a {
    color: #f2f2f2;
    text-decoration: none;
    border: 1px solid rgba(242, 242, 242, 0.4);
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    transition:
      background 150ms ease,
      border-color 150ms ease;
  }

  a:hover {
    background: rgba(242, 242, 242, 0.12);
    border-color: rgba(242, 242, 242, 0.7);
  }
</style>
