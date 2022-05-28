import styled, { css } from 'styled-components';

const StyledArrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ direction }: Props) => css`
    transform: ${direction === 'right' ? 'rotate(180deg)' : ''};
  `}
`;

type Props = {
  direction: 'left' | 'right';
};

function Arrow({ direction }: Props) {
  return (
    <StyledArrow direction={direction}>
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
          stroke="#525252"
          strokeWidth="1.5"
        />
      </svg>
    </StyledArrow>
  );
}

export default Arrow;
