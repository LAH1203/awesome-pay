import Card from './Basic';
import { CardType } from '../../types';
import styled from 'styled-components';

const CardName = styled.div`
  color: #575757;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  height: 16px;
  margin-top: 15px;
`;

type Props = {
  id: CardType['id'];
  bgColor: string;
  cardName: CardType['cardName'];
  className?: string;
  company: CardType['cardCompany'];
  ownerName: CardType['cardOwnerName'];
  number: CardType['cardNumber'];
  size: 'small' | 'medium' | 'large';
  validDate: CardType['validDate'];
  onClickFunc?: (e: React.MouseEvent<HTMLElement>) => void;
};

function DisplayCard({
  id,
  bgColor,
  cardName,
  className,
  company,
  ownerName,
  number,
  size = 'medium',
  validDate,
  onClickFunc,
}: Props) {
  return (
    <div className={className}>
      <Card
        id={id}
        bgColor={bgColor}
        company={company}
        size={size}
        name={ownerName}
        number={number}
        validDate={validDate}
        onClickFunc={onClickFunc}
      />
      <CardName>{cardName}</CardName>
    </div>
  );
}

export default DisplayCard;
