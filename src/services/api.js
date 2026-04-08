const BASE_URL = "https://69d4ac3ad396bd74235d5f9f.mockapi.io/api/v1";

// WHAT I DO
export const getWhatIDo = async () => {
  try {
    const res = await fetch(`${BASE_URL}/whatido`);
    if (!res.ok) throw new Error("Failed to fetch What I Do");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// PROJECTS
export const getProjects = async () => {
  try {
    const res = await fetch(`${BASE_URL}/projects`);
    if (!res.ok) throw new Error("Failed to fetch Projects");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};