import { Field, Formik } from 'formik';
import { Form, FormField, ErrorMessage } from './RecipeForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
const RecipeSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  time: Yup.number().positive('Must be > 0').required('Required field'),
  servings: Yup.number().positive('Must be > 0').required('Required field'),
  calories: Yup.number().positive('Must be > 0').required('Required field'),
  image: Yup.string().required('Required field'),
  difficulty: Yup.string().oneOf(['easy', 'medium', 'hard']).required(),
});

const RecipeForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        time: 0,
        servings: 0,
        calories: 0,
        image: '',
        difficulty: 'easy',
      }}
      validationSchema={RecipeSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField htmlFor="name">
          Name
          <Field id="name" name="name" type="text" />
          <ErrorMessage component="span" name="name" />
        </FormField>
        <FormField htmlFor="time">
          Time
          <Field id="time" name="time" type="number" />
          <ErrorMessage component="span" name="time" />
        </FormField>
        <FormField htmlFor="servings">
          Servings
          <Field id="servings" name="servings" type="number" />
          <ErrorMessage component="span" name="servings" />
        </FormField>
        <FormField htmlFor="calories">
          Calories
          <Field id="calories" name="calories" type="number" />
          <ErrorMessage component="span" name="calories" />
        </FormField>
        <FormField htmlFor="image">
          Image
          <Field id="image" name="image" type="text" />
          <ErrorMessage component="span" name="image" />
        </FormField>
        <FormField htmlFor="difficulty">
          Difficulty
          <Field as="select" name="difficulty" id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
          <ErrorMessage component="span" name="difficulty" />
        </FormField>
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default RecipeForm;
