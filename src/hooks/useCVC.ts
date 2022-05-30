import { isValidCVC } from '../utils/regExp';
import useInput from './useInput';

const useCVC = (initialValue: string) => {
  const { value: CVC, setValue: setCVC } = useInput(initialValue);

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isValidCVC(value)) return;

    setCVC(e);
  };

  return { CVC, setCVC: handler };
};

export default useCVC;
