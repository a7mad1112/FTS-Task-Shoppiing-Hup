export const fetchData = async (path) => {
  try {
    const res = await fetch(`https://shehap-commerce.onrender.com/${path}`);
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
