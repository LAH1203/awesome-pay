import { Button } from 'components';
import { Payment } from 'components';
import { useState } from 'react';

function MainPage() {
  const [totalMoney, setTotalMoney] = useState(100000);
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(prevState => !prevState);
  };

  const paymentFunc = () => {
    toggleShowModal();
    alert(`${totalMoney.toLocaleString('ko-KR')}원 결제 완료!`);
  };

  return (
    <div>
      <Button onClickFunc={toggleShowModal}>결제 모달 켜기</Button>
      <Payment
        showModal={showModal}
        toggleShowModal={toggleShowModal}
        companyName="woowa store"
        totalPrice={totalMoney}
        paymentFunc={paymentFunc}
      />
    </div>
  );
}

export default MainPage;
