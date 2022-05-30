import { isValidPassword } from '../utils/regExp';
import useInput from './useInput';

const usePassword = (initialValue: string) => {
  const { value: password, setValue: setPassword } = useInput(initialValue);

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isValidPassword(value)) return;

    setPassword(e);
  };

  return { password, setPassword: handler };
};

export default usePassword;
