import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

interface ButtonProps {
  selected: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  background-color: ${(props) => props.selected ? '#646cff' : '#1a1a1a'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #535bf2;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 16px 0;
  border: 1px solid #ccc;
`;
