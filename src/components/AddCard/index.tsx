import { Button, Card } from '../../components';
import { CARD_COMPANY, NOW } from '../../constants';
import { CardType, ContentType } from '../../types';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { encryptCardNumber, makeValidDate } from '../../utils/processCard';
import {
  useCVC,
  useInput,
  useNumber,
  useOwnerName,
  usePassword,
} from '../../hooks';

import { splitCardNumbers } from '../../utils/regExp';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  Button {
    display: inline-block;

    :hover {
      transform: scale(1.2);
    }
  }

  h3 {
    font-size: 20px;
    margin: 0;
  }
`;

const Content = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledCard = styled(Card)`
  align-self: center;
  margin: 20px 0;
`;

const Select = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 160px;
  left: 120px;

  background: white;
  animation: selectBoxFadein 1s;
`;

const Option = styled.span`
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid lightGray;
  cursor: pointer;

  :hover {
    font-size: 18px;
    font-weight: 900;
    color: ${({ color }: { color: string }) => color};
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 5px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const NumberInputGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  width: 330px;
  height: 30px;
  border: 1px solid lightGray;
  border-radius: 2px;
  text-align: center;

  :focus {
    outline: 1px solid #ffc2c2;
    border: 1px solid #ffc2c2;
    border-radius: 2px;
  }
`;

const NumberInput = styled(Input).attrs({ required: true })`
  width: 70px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ValidDateInput = styled(Input).attrs({
  type: 'month',
  min: `${NOW.YEAR}-${NOW.MONTH}`,
  required: true,
})`
  width: 200px;
`;

const CVCInput = styled(Input).attrs({
  type: 'password',
  required: true,
})`
  width: 84px;
`;

const PasswordInput = styled(Input).attrs({
  type: 'password',
  maxLength: 1,
  required: true,
})`
  width: 30px;
  margin-right: 7px;
`;

const OwnerNameLengthDescription = styled.div`
  color: #525252;
  font-size: 12px;
  float: right;
`;

const Bullet = styled.span`
  margin: 0 15px;
  color: #ff9c9c;
`;

const AddButton = styled(Button)`
  align-self: flex-end;
`;

type Props = {
  setContent: Dispatch<SetStateAction<ContentType>>;
};

function AddCard({ setContent }: Props) {
  const [showCompanySelectBox, setShowCompanySelectBox] = useState(false);
  const [color, setColor] = useState('white');
  const [company, setCompany] = useState('');
  const { number: firstNumber, setNumber: setFirstNumber } = useNumber('');
  const { number: secondNumber, setNumber: setSecondNumber } = useNumber('');
  const { number: thirdNumber, setNumber: setThirdNumber } = useNumber('');
  const { number: fourthNumber, setNumber: setFourthNumber } = useNumber('');
  const { value: validDate, setValue: setValidDate } = useInput('');
  const { ownerName, setOwnerName } = useOwnerName('');
  const { CVC, setCVC } = useCVC('');
  const { password: firstPassword, setPassword: setFirstPassword } =
    usePassword('');
  const { password: secondPassword, setPassword: setSecondPassword } =
    usePassword('');
  const { value: name, setValue: setName } = useInput('');

  const onClickPreviousButton = () => {
    setContent('payment');
  };

  const onSubmitAddCardForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      [firstNumber, secondNumber, thirdNumber, fourthNumber].some(
        number => number.length !== 4,
      )
    )
      return;
    if (CVC.length !== 3) return;

    const card: CardType = {
      cardColor: color,
      cardCompany: company,
      cardName: name,
      cardOwnerName: ownerName,
      cardNumber: `${firstNumber}${secondNumber}${thirdNumber}${fourthNumber}`,
      cardCVC: CVC,
      cardPassword: `${firstPassword}${secondPassword}`,
      validDate: validDate,
    };

    fetch('https://heroku-payments-npm.herokuapp.com/cards', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setContent('payment');
    });
  };

  const toggleShowCompanySelectBox = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    setShowCompanySelectBox(prevState => !prevState);
  };

  const closeShowCompanySelectBox = () => {
    setShowCompanySelectBox(false);
  };

  const onClickCardCompany = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLSpanElement)) return;

    const { name, color } = e.target.dataset;

    setCompany(name as string);
    setColor(color as string);
  };

  const isAllNeededValuesEnteredWell = () => {
    if (!company) return;
    if (
      [firstNumber, secondNumber, thirdNumber, fourthNumber].some(
        number => number.length !== 4,
      )
    )
      return false;
    if (!validDate) return false;
    if (CVC.length !== 3) return false;
    if (!firstPassword || !secondPassword) return false;

    return true;
  };

  return (
    <div onClick={closeShowCompanySelectBox}>
      <Title>
        <Button size="medium" onClickFunc={onClickPreviousButton}>
          ←
        </Button>
        <h3>카드 추가</h3>
      </Title>
      <Content onSubmit={onSubmitAddCardForm}>
        <StyledCard
          bgColor={color}
          company={company}
          name={ownerName}
          number={splitCardNumbers(
            encryptCardNumber(
              `${firstNumber}${secondNumber}${thirdNumber}${fourthNumber}`,
            ),
            ' ',
          )}
          size="small"
          validDate={makeValidDate(validDate)}
          onClickFunc={toggleShowCompanySelectBox}
        />
        {showCompanySelectBox && (
          <Select>
            {CARD_COMPANY.map(({ name, color }) => (
              <Option
                color={color}
                onClick={onClickCardCompany}
                data-name={name}
                data-color={color}
                key={name}
              >
                {name}
              </Option>
            ))}
          </Select>
        )}
        <InputGroup>
          <div>
            <Label>카드 번호</Label>
            <NumberInputGroup>
              <NumberInput
                type="number"
                value={firstNumber}
                onChange={setFirstNumber}
              />
              <NumberInput
                type="number"
                value={secondNumber}
                onChange={setSecondNumber}
              />
              <NumberInput
                type="password"
                value={thirdNumber}
                onChange={setThirdNumber}
              />
              <NumberInput
                type="password"
                value={fourthNumber}
                onChange={setFourthNumber}
              />
            </NumberInputGroup>
          </div>
          <div>
            <Label>만료일</Label>
            <ValidDateInput value={validDate} onChange={setValidDate} />
          </div>
          <div>
            <OwnerNameLengthDescription>
              {ownerName.length}/30
            </OwnerNameLengthDescription>
            <Label>카드 소유자 이름 (선택)</Label>
            <Input
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              maxLength={30}
              value={ownerName}
              onChange={setOwnerName}
            />
          </div>
          <div>
            <Label>보안 코드(CVC/CVV)</Label>
            <CVCInput value={CVC} onChange={setCVC} />
          </div>
          <div>
            <Label>카드 비밀번호</Label>
            <PasswordInput value={firstPassword} onChange={setFirstPassword} />
            <PasswordInput
              value={secondPassword}
              onChange={setSecondPassword}
            />
            <Bullet>•</Bullet>
            <Bullet>•</Bullet>
          </div>
          <div>
            <Label>카드 별칭 (선택)</Label>
            <Input value={name} onChange={setName} />
          </div>
        </InputGroup>
        {isAllNeededValuesEnteredWell() && (
          <AddButton type="submit" color="#ff9c9c" fontWeight="900">
            추가
          </AddButton>
        )}
      </Content>
    </div>
  );
}

export default AddCard;
