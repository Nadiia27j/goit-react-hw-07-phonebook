import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  display: flex;
`;

export const ButtonDelete = styled.button`
  margin-left: 50px;
  :hover {
    background-color: gray;
  }
`;

