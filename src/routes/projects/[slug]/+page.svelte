<script lang="ts">
  import { page } from "$app/stores";
  import { projects } from "$lib/projects";
  import { getTagColor, toRgba } from "$lib/tagColors";

  $: slug = $page.params.slug;
  $: project = projects.find((item) => item.slug === slug);
</script>

{#if project}
  <main class="project-page">
    <a class="back" href="/">← Back</a>

    <header class="hero">
      <div class="hero-text">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {#if project.tags?.length}
          <ul class="tags">
            {#each project.tags as tag}
              {@const color = getTagColor(tag)}
              <li
                style={`background-color: ${toRgba(
                  color,
                  0.18
                )}; border-color: ${toRgba(color, 0.5)}; color: ${toRgba(
                  color,
                  0.95
                )};`}
              >
                {tag}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
      <img class="hero-image" src={project.cover} alt={project.title} />
    </header>

    {#if project.body}
      <section class="body">
        <p>{project.body}</p>
      </section>
    {/if}

    {#if project.repo_link}
      <section class="repo_link">
        <a href={"https://" + project.repo_link}>{project.repo_link}</a>
      </section>
    {/if}

    {#if project.gallery?.length}
      <section class="gallery">
        {#each project.gallery as image}
          <img src={image} alt={project.title} loading="lazy" />
        {/each}
      </section>
    {/if}
  </main>
{:else}
  <main class="project-page">
    <a class="back" href="/">← Back</a>
    <h1>Project not found</h1>
    <p>Double-check the URL or head back to the home page.</p>
  </main>
{/if}

<style>
  :global(body) {
    margin: 0;
    min-height: 100vh;
    background: #3a3a3a;
    color: #f2f2f2;
    font-family: "Comic Relief", cursive;
  }

  .project-page {
    width: min(100%, 1040px);
    margin: 0 auto;
    padding: 2.5rem 2rem 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    box-sizing: border-box;
  }

  .back {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
    align-self: flex-start;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 2rem;
    align-items: center;
  }

  .hero-text h1 {
    margin: 0 0 0.6rem;
    font-size: 2.4rem;
  }

  .hero-text p {
    margin: 0;
    font-size: 1.2rem;
    opacity: 0.9;
  }

  .hero-image {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  }

  .tags {
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tags li {
    font-size: 0.85rem;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    background: rgba(242, 242, 242, 0.12);
    border: 1px solid rgba(242, 242, 242, 0.2);
  }

  .body p {
    margin: 0;
    opacity: 0.9;
    font-size: 1.05rem;
  }

  .repo_link a {
    margin: 0;
    opacity: 0.9;
    font-size: 1.05rem;
    color: #f2f2f2;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .gallery img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 820px) {
    .hero {
      grid-template-columns: 1fr;
    }
  }
</style>
