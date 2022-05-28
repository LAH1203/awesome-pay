import styled from 'styled-components';

type Props = { totalPrice: number };

const PriceSection = styled.section`
  position: relative;
  padding: 0 20px;

  hr {
    margin: 10px 0;
  }

  h3 {
    font-size: 17px;
    margin: 0;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const Price = styled.div`
  display: inline-block;
  font-size: 15px;
  font-weight: 900;
  line-height: 8px;
  border-bottom: 8px solid #ffc2c2;
`;

function PaymentPrice({ totalPrice }: Props) {
  return (
    <PriceSection>
      <h3>결제 금액</h3>
      <hr />
      <PriceContainer>
        <Price>총 결제 금액</Price>
        <Price>{totalPrice.toLocaleString('ko-KR')}원</Price>
      </PriceContainer>
    </PriceSection>
  );
}

export default PaymentPrice;
