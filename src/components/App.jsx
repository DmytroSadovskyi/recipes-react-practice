import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { Layout } from './Layout/Layout';
import { Component } from 'react';
export class App extends Component {
  state = {
    recipes: initialRecipes,
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
        <RecipeList items={recipes} onDelete={this.deleteRecipe} />
      </Layout>
    );
  }
}
