export const fetchData = async (path) => {
  try {
    const res = await fetch(`http://localhost:4000/${path}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${path}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${path} :`, error.message);
    throw error;
  }
};
