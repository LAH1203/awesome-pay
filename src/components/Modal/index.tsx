import Portal from '../../ModalPortal';
import styled from 'styled-components';

const Dimmer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2147483647;

  width: 100%;
  height: 100%;
  background: #000000b3;
`;

const Content = styled.div`
  animation: blowUpModal 0.5s;

  font-family: 'Gowun Dodum', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
`;

type Props = {
  children: React.ReactNode;
  showModal: boolean;
  toggleShowModal: () => void;
};

function Modal({ children, showModal, toggleShowModal }: Props) {
  const preventBubblingEvent = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      {showModal && (
        <Dimmer onClick={toggleShowModal}>
          <Content onClick={preventBubblingEvent}>{children}</Content>
        </Dimmer>
      )}
    </Portal>
  );
}

export default Modal;
