const API_KEY = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
    if (!API_KEY) {
      throw new Error("API key not found");
    }

    const baseURL = "https://api.spoonacular.com/recipes/search?apiKey=9c41a8a7a20100c74b91533f1463294dc6813dfc";
    const url = new URL(baseURL);
  
    const queryParams = {
      apiKey: API_KEY,
      query: searchTerm,
      number: `${10}`,
      offset: `${(page - 1) * 10}`,
    };
  
    url.search = new URLSearchParams(queryParams).toString();
  
    try {
      const searchResponse = await fetch(url.toString());
      const resultsJson = await searchResponse.json();
      return resultsJson;
    } catch (error) {
      console.error(error);
    }
  };