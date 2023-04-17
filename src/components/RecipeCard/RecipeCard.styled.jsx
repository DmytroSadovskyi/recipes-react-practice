import styled from '@emotion/styled';

export const Container = styled.section`
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const Name = styled.h2`
  margin-top: 8px;
  margin-bottom: 12px;
`;
export const RecipeInfo = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const RecipeInfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DifficultyTitle = styled.h3`
  margin-bottom: 10px;
`;
export const DifficultyInfo = styled.ul`
  display: flex;
  gap: 8px;
`;

export const DifficultyBadge = styled.li`
  padding: 8px 12px;
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ active, type }) => {
    if (!active) {
      return 'white';
    }

    switch (type) {
      case 'easy':
        return 'green';

      case 'medium':
        return 'orange';

      case 'hard':
        return 'tomato';

      default:
        return;
    }
  }};

  color: ${p => (p.active ? 'white' : 'black')};
`;
// export const DifficultyBadge = styled.li`
//   padding: 8px 12px;
//   border-radius: ${p => p.theme.radii.sm};
//   border: 1px solid ${p => p.theme.colors.black};
//   background-color: ${p => (p.active ? p.theme.colors.accent : 'white')};
//   color: ${p => (p.active ? 'white' : 'black')};
// `;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`;
