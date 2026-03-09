<script lang="ts">
  import { getTagColor, toRgba } from "$lib/tagColors";

  type Project = {
    slug: string;
    title: string;
    description: string;
    year?: string;
    tags?: string[];
    href?: string;
    cover?: string;
  };

  export let title = "Projects";
  export let subtitle = "";
  export let projects: Project[] = [];
</script>

<section class="projects">
  <div class="projects-header">
    <h2>{title}</h2>
    {#if subtitle}
      <p class="subtitle">{subtitle}</p>
    {/if}
  </div>

  <div class="project-grid">
    {#each projects as project}
      <article class="card">
        {#if project.cover}
          <a class="cover-link" href={`/projects/${project.slug}`}>
            <img
              class="cover"
              src={project.cover}
              alt={project.title}
              loading="lazy"
            />
          </a>
        {/if}
        <div class="card-top">
          <h3>
            <a class="title-link" href={`/projects/${project.slug}`}
              >{project.title}</a
            >
          </h3>
          {#if project.year}
            <span class="year">{project.year}</span>
          {/if}
        </div>
        <p class="description">{project.description}</p>
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
        <a class="card-link" href={`/projects/${project.slug}`}>View details</a>
      </article>
    {/each}
  </div>
</section>

<style>
  .projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 2rem;
  }

  .projects-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  h2 {
    margin: 0;
    font-size: 1.8rem;
  }

  .subtitle {
    margin: 0;
    opacity: 0.75;
  }

  .project-grid {
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(242, 242, 242, 0.15);
    border-radius: 18px;
    padding: 1.2rem 1.1rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  }

  .cover-link {
    display: block;
  }

  .cover {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: inset 0 0 0 1px rgba(242, 242, 242, 0.12);
  }

  .card-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.6rem;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  .title-link {
    color: inherit;
    text-decoration: none;
  }

  .title-link:hover {
    text-decoration: underline;
  }

  .year {
    font-size: 0.85rem;
    opacity: 0.7;
  }

  .description {
    margin: 0;
    opacity: 0.9;
    font-size: 1rem;
  }

  .tags {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .tags li {
    font-size: 0.8rem;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    background: rgba(242, 242, 242, 0.12);
    border: 1px solid rgba(242, 242, 242, 0.2);
  }

  .card-link {
    margin-top: auto;
    align-self: flex-start;
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid rgba(242, 242, 242, 0.4);
    padding-bottom: 0.1rem;
  }

  .card-link:hover {
    border-color: rgba(242, 242, 242, 0.8);
  }

  @media (max-width: 680px) {
    .project-grid {
      grid-template-columns: 1fr;
    }

    .projects {
      margin-top: 1.6rem;
    }
  }
</style>
