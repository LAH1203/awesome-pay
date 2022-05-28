import { CheckBox } from '../../components';
import styled from 'styled-components';

const TermSection = styled.section`
  position: relative;
  padding: 0 20px;
  font-size: 11px;

  hr {
    margin: 10px 0;
  }

  h3 {
    font-size: 17px;
    margin: 0;
  }
`;

const FactorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5px 0;

  span {
    border-bottom: 1px solid black;
    cursor: pointer;
  }
`;

const Factor = styled.div`
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Props = {
  companyName: string;
  isChecked: boolean;
  onClickCheckbox: () => void;
};

function Term({ companyName, isChecked, onClickCheckbox }: Props) {
  return (
    <TermSection>
      <h3>약관 이용 및 동의</h3>
      <hr />
      <FactorContainer>
        <Factor>
          거래 정보 제공 동의: <b>{companyName}</b>
        </Factor>
        <span>상세보기</span>
      </FactorContainer>
      <FactorContainer>
        <div>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</div>
        <CheckBox
          id="payments-term"
          checked={isChecked}
          toggleChecked={onClickCheckbox}
        />
      </FactorContainer>
    </TermSection>
  );
}

export default Term;
