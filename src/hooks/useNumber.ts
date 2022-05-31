import { isNumber } from '../utils/regExp';
import useInput from './useInput';

const useNumber = (initialValue: string) => {
  const { value: number, setValue: setNumber } = useInput(initialValue);

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length > 4) return;
    if (value !== '' && !isNumber(value)) return;

    setNumber(e);
  };

  return { number, setNumber: handler };
};

export default useNumber;
