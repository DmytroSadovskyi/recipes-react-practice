import PropTypes from 'prop-types';
import { TfiTimer } from 'react-icons/tfi';
import { FiPieChart } from 'react-icons/fi';
import { HiOutlineChartBar } from 'react-icons/hi';
import {
  DifficultyTitle,
  DifficultyBadge,
  DifficultyInfo,
  Name,
  RecipeInfo,
  RecipeInfoItem,
} from './RecipeCard.styled';
export const RecipeCard = ({
  item: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <>
      <img src={image} alt={name} width="200" />
      <Name>{name}</Name>
      <RecipeInfo>
        <RecipeInfoItem>
          <TfiTimer size={20} />
          <span>{time} min</span>
        </RecipeInfoItem>
        <RecipeInfoItem>
          <FiPieChart size={20} />
          <span>{servings} servings</span>
        </RecipeInfoItem>
        <RecipeInfoItem>
          <HiOutlineChartBar size={20} />
          <span>{calories} calories</span>
        </RecipeInfoItem>
      </RecipeInfo>
      <section>
        <DifficultyTitle>Difficulty</DifficultyTitle>
        <DifficultyInfo>
          <DifficultyBadge active={difficulty === 'easy'} type="easy">
            Easy
          </DifficultyBadge>
          <DifficultyBadge active={difficulty === 'medium'} type="medium">
            Medium
          </DifficultyBadge>
          <DifficultyBadge active={difficulty === 'hard'} type="hard">
            Hard
          </DifficultyBadge>
        </DifficultyInfo>
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
