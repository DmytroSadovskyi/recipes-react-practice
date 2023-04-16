import styled from '@emotion/styled';
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
