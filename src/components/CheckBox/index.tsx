import styled from 'styled-components';

const StyledInput = styled.input`
  display: none;

  :checked + label {
    background: #ff9c9c;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  padding: 1px;
  border: 1px solid #ff9c9c;
  border-radius: 3px;
  background: white;
  color: white;
  cursor: pointer;

  div {
    width: 8px;
    height: 5px;
    transform: rotate(-45deg);
    border-bottom: 2px solid white;
    border-left: 2px solid white;
  }
`;

type Props = {
  id: string;
  checked: boolean;
  toggleChecked: () => void;
};

function CheckBox({ id, checked, toggleChecked }: Props) {
  return (
    <>
      <StyledInput type="checkbox" id={id} defaultChecked={checked} />
      <StyledLabel htmlFor={id} onClick={toggleChecked}>
        <div />
      </StyledLabel>
    </>
  );
}

export default CheckBox;
