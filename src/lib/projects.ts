import type { Project } from '~/types';

/**
 * Fetch Projects
 *
 * Reads project data from a local JSON file
 */
export async function fetchProjects(): Promise<Array<Project>> {
  const { default: projectsData } = await import('~/data/projects.json');
  
  const projects: Array<Project> = projectsData.map((project) => ({
    description: project.description,
    homepage: project.homepage,
    name: project.name,
    template: false,
    url: project.url,
  }));

  return projects;
}
