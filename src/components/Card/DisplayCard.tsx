import Card from './Basic';
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
  bgColor: string;
  cardName: string;
  className?: string;
  company: string;
  ownerName: string;
  number: string;
  size: 'small' | 'medium' | 'large';
  validDate: string;
};

function DisplayCard({
  bgColor,
  cardName,
  className,
  company,
  ownerName,
  number,
  size = 'medium',
  validDate,
}: Props) {
  return (
    <div className={className}>
      <Card
        bgColor={bgColor}
        company={company}
        size={size}
        name={ownerName}
        number={number}
        validDate={validDate}
      />
      <CardName>{cardName}</CardName>
    </div>
  );
}

export default DisplayCard;
