import client from "../tina/__generated__/client";

export async function getProjects() {
  try {
    const projectsResponse = await client.queries.projectConnection();
    return projectsResponse.data.projectConnection.edges?.map((edge) => edge?.node) || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProjectById(id: string) {
  try {
    const projectResponse = await client.queries.project({ relativePath: `${id}.json` });
    return projectResponse.data.project;
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    return null;
  }
}

export async function getGalleryItems() {
  try {
    const galleryResponse = await client.queries.galleryConnection();
    return galleryResponse.data.galleryConnection.edges?.map((edge) => edge?.node) || [];
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    return [];
  }
}

export async function getGalleryItemById(id: string) {
  try {
    const galleryResponse = await client.queries.gallery({ relativePath: `${id}.json` });
    return galleryResponse.data.gallery;
  } catch (error) {
    console.error(`Error fetching gallery item ${id}:`, error);
    return null;
  }
}
