import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { Layout } from './Layout/Layout';
import { Component } from 'react';
import RecipeForm from './RecipeForm/RecipeForm';
export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  componentDidMount() {
    const recipes = localStorage.getItem('recipes');
    const parsedRecipes = JSON.parse(recipes);

    if (parsedRecipes) {
      this.setState({ recipes: parsedRecipes });
    }
    return [];
  }

  componentDidUpdate(prevState) {
    const { recipes } = this.state;
    if (recipes !== prevState.recipes) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }

  addRecipe = newRecipe => {
    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe],
    }));
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }));
  };

  render() {
    const { recipes } = this.state;
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe} />
        <RecipeList items={recipes} onDelete={this.deleteRecipe} />
      </Layout>
    );
  }
}
