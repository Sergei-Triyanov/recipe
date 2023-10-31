import expres from 'express';
import cors from 'cors';
import * as recipeAPI from "./recipe-api";

const app = expres()

app.use(expres.json())
app.use(cors())

app.get('/api/recipe/search', async (req, res) => {
    const searchTerm = req.query.searchTerm as string;
    const page = parseInt(req.query.page as string);
  
    const results = await recipeAPI.searchRecipes(searchTerm, page);
    return res.json(results);
});

app.listen(5000, () => {
    console.log('Server running on localhost: 5000')
})
