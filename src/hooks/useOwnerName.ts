import { isValidOwnerName } from '../utils/regExp';
import useInput from './useInput';

const useOwnerName = (initialValue: string) => {
  const { value: ownerName, setValue: setOwnerName } = useInput(initialValue);

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isValidOwnerName(value)) return;

    setOwnerName({ ...e, target: { ...e.target, value: value.toUpperCase() } });
  };

  return { ownerName, setOwnerName: handler };
};

export default useOwnerName;
