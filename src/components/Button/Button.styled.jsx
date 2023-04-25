import styled from 'styled-components';

export const StyledBtn = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;

  background-color: ${props => (props.isActive ? '#e1b7eb' : '#a371d9')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'MontserratSemiBold';
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #232323;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus-visible {
    background-color: #d3bee6;
  }

`;
