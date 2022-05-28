import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

function ModalPortal({ children }: Props) {
  const el = document.getElementById('modal') as HTMLElement;

  return createPortal(children, el);
}

export default ModalPortal;
