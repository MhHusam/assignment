//////////////////////////fetchAllCategories//////////////////////////////////
export const fetchAllCategories = async () => {
  try {
    // Fetch data from the API
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    if (!response.ok) {
      throw new Error(`Try again`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
