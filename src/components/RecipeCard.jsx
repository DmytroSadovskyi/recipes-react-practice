import PropTypes from 'prop-types';
export const RecipeCard = ({
  item: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>
      <ul>
        <li>
          <span>{time} min</span>
        </li>
        <li>
          <span>{servings} servings</span>
        </li>
        <li>
          <span>{calories} calories</span>
        </li>
      </ul>
      <section>
        <h3>Difficulty</h3>
        <ul>
          <li>Easy</li>
          <li>Medium</li>
          <li>Hard</li>
        </ul>
      </section>
    </>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
