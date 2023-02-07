import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  background-image: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  padding: 2rem;
  height: 100%;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
`;

export const OptionContainer = styled.div`
  border-radius: 50%;
  padding: 50px;
  border: 20px solid ${({ marginColor }) => marginColor};
  background-color: white;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const Button = styled.button`
  border-radius: 5%;
  border: 1px solid gray;
  border-radius: 0.375rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 0.5rem 1rem;
  color: ${({ color }) => color};
  cursor: pointer;
  width: ${({ width }) => width};
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: white;
  padding: 1rem;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const Modal = styled.div`
  background-color: white;
  width: max-content;
  padding: 2rem;
  border-radius: 1rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 40%;
  transform: translateY(-40%);
`;

export const Card = styled.div`
  background-color: white;
  width: max-content;
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};

  width: 15%;
  height: 30%;
`;
