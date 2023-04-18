import PropTypes from 'prop-types';
import { Component } from 'react';
import { TfiTimer } from 'react-icons/tfi';
import { FiPieChart } from 'react-icons/fi';
import { HiOutlineChartBar, HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Container,
  Image,
  DifficultyTitle,
  DifficultyBadge,
  DifficultyInfo,
  Name,
  RecipeInfo,
  RecipeInfoItem,
  Actions,
  Wrap,
} from './RecipeCard.styled';
import { ImageModal } from 'components/ImageModal/ImageModal';

export class RecipeCard extends Component {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      servings: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      item: { id, name, time, servings, calories, image, difficulty },
      onDelete,
    } = this.props;
    const { isOpen } = this.state;
    return (
      <Container>
        <Image src={image} alt={name} width="200" />
        <Wrap>
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
        </Wrap>
        <Actions>
          <button aria-label="Delete" onClick={() => onDelete(id)}>
            <HiTrash />
          </button>
          <button aria-label="Zoom" onClick={this.openModal}>
            <HiZoomIn />
          </button>
        </Actions>

        <ImageModal isOpen={isOpen} onClose={this.closeModal} image={image} />
      </Container>
    );
  }
}
