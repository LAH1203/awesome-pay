import { AppContainer, Modal } from '../../components';

import AddCard from '../../components/AddCard';
import { ContentType } from '../../types';
import GlobalStyle from '../../styles/Global';
import Helmet from '../../Helmet';
import Payment from '../../components/Payment';
import { useState } from 'react';

type Props = {
  showModal: boolean;
  toggleShowModal: () => void;
  companyName: string;
  totalPrice: number;
  paymentFunc: () => void;
};

function PaymentModal({
  showModal,
  toggleShowModal,
  companyName,
  totalPrice,
  paymentFunc,
}: Props) {
  const [content, setContent] = useState<ContentType>('payment');

  return (
    <Modal showModal={showModal} toggleShowModal={toggleShowModal}>
      <Helmet />
      <GlobalStyle />
      <AppContainer>
        {content === 'payment' ? (
          <Payment
            toggleShowModal={toggleShowModal}
            companyName={companyName}
            totalPrice={totalPrice}
            paymentFunc={paymentFunc}
            setContent={setContent}
          />
        ) : (
          <AddCard setContent={setContent} />
        )}
      </AppContainer>
    </Modal>
  );
}

export default PaymentModal;
