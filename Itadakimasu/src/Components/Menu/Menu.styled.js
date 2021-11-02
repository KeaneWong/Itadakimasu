import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F8F8F8;
  height: 100vh;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  display:flex;
  flex-direction: row;
  overflow: hidden;
  max-width:1024px;
  width:100vw;
  font-family: Ariel;
  transition: transform 0.3s ease-in-out;

  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  @media (max-width: '576px') {
    width: 100%;
  }

.LinkNav {
    font-size: 19px;
    text-transform: uppercase;
    font-weight: 400;
    padding: 2rem 0;
    letter-spacing: 0em;
    color: #BBBBBB;
    text-decoration: none;
    transition: color 0.3s linear;
    padding: 0;
    @media (max-width: '576px') {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #000000;
    }
  }

`;