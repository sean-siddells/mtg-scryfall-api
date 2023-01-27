import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  padding: 1vh 15vw;
`;

export const InputFieldContainer = styled.div`
  display: flex;
  padding-left: 10vw;
  flex-direction: row;
`;

export const InputField = styled.input`
  border-radius: 5px;
  width: ${window.innerWidth / 2}px;
`;
