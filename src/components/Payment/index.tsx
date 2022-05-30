import { Dispatch, SetStateAction, useState } from 'react';

import { Button } from '../../components';
import { ContentType } from '../../types';
import HoldingCards from './HoldingCards';
import PaymentPrice from './PaymentPrice';
import Term from './Term';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 20px;
  margin: 0;

  span {
    color: #ff413b;
    font-weight: 900;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  display: inline-block;
  width: 40%;
`;

type Props = {
  toggleShowModal: () => void;
  companyName: string;
  totalPrice: number;
  paymentFunc: () => void;
  setContent: Dispatch<SetStateAction<ContentType>>;
};

function Payment({
  toggleShowModal,
  companyName,
  totalPrice,
  paymentFunc,
  setContent,
}: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const onClickCheckbox = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <>
      <Title>
        <span>👑 AWESOME PAY</span> | 결제
      </Title>
      <Content>
        <HoldingCards setContent={setContent} />
        <PaymentPrice totalPrice={totalPrice} />
        <Term
          companyName={companyName}
          isChecked={isChecked}
          onClickCheckbox={onClickCheckbox}
        />
        <ButtonContainer>
          <StyledButton
            bgColor="#ff9c9c"
            color="white"
            size="medium"
            disabled={!isChecked}
            onClickFunc={paymentFunc}
          >
            결제하기
          </StyledButton>
          <StyledButton
            bgColor="#DDDDDD"
            color="white"
            size="medium"
            onClickFunc={toggleShowModal}
          >
            취소하기
          </StyledButton>
        </ButtonContainer>
      </Content>
    </>
  );
}

export default Payment;
