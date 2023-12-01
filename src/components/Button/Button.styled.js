import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  display: block;
  border-radius: 30px;
  padding: 10px 20px;
  color: #000;
  text-align: center;
  box-shadow: 0 6px #999;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #000;
    border-color: transparent;
  }
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }
  & span {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
