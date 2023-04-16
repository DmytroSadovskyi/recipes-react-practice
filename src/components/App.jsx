import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../recipes.json';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
    </Layout>
  );
};
