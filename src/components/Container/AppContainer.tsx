import styled, { css } from 'styled-components';

const StyledPage = styled.div`
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 30px 30px 50px;
  width: 400px;
  height: fit-content;
  max-height: 757px;

  ${({ alignItems }: Pick<Props, 'alignItems'>) => css`
    align-items: ${alignItems};
  `}
`;

type Props = {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  children: React.ReactNode;
};

export default function AppContainer({ alignItems, children }: Props) {
  return <StyledPage alignItems={alignItems}>{children}</StyledPage>;
}
