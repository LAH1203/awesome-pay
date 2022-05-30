import { Arrow, Button, DisplayCard, Spinner } from '../../components';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { encryptCardNumber, makeValidDate } from '../../utils/processCard';

import { State } from '../../types';
import { splitCardNumbers } from '../../utils/regExp';
import styled from 'styled-components';

const CardSection = styled.section`
  position: relative;
  padding: 0 20px;
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 17px;
    margin-bottom: 20px;
  }

  Button {
    font-size: 30px;
    margin-right: 10px;

    :hover {
      transform: scale(1.2);
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #f6f6f6;
  width: 285px;
  height: 200px;
`;

const CardCarousel = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
`;

const Card = styled(DisplayCard)`
  margin: auto 30px;
`;

const LeftButton = styled(Button)`
  position: absolute;
  top: 145px;
  left: 20px;
  animation: dungdung 0.5s infinite alternate;
`;

const RightButton = styled(Button)`
  position: absolute;
  top: 145px;
  right: 35px;
  animation: dungdung 0.5s infinite alternate;
`;

const Description = styled.div`
  margin-top: 20px;
  font-size: 13px;

  span {
    font-weight: 900;
  }
`;

type Props = {
  setContent: Dispatch<SetStateAction<'payment' | 'add'>>;
};

function HoldingCards({ setContent }: Props) {
  const [cardList, setCardList] = useState<State['cardList']>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const sliderRef = useRef() as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    fetch('https://heroku-payments-npm.herokuapp.com/cards', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((data: State['cardList']) => {
        setCardList(data);
        setIsLoading(false);
      })
      .catch(error => {
        alert(
          '카드 정보를 가져오는데 에러가 발생하였습니다. 다시 시도해주세요.',
        );
      });
  }, []);

  const onClickAddCardButton = () => {
    setContent('add');
  };

  const onClickDeleteCard = (e: React.MouseEvent<HTMLElement>) => {
    if (!confirm('삭제하시겠습니까?')) return;

    if (!(e.currentTarget instanceof HTMLDivElement)) return;

    const { id } = e.currentTarget;

    fetch(`https://heroku-payments-npm.herokuapp.com/cards/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setCardList(
        cardList.filter(card => card.id && card.id.toString() !== id),
      );
    });
  };

  const onClickLeftButton = () => {
    if (!sliderRef.current) return;

    const { clientWidth } = sliderRef.current;

    if (currentCardIndex <= 0) {
      sliderRef.current.scrollLeft = clientWidth * cardList.length;
      setCurrentCardIndex(cardList.length - 1);
      return;
    }

    sliderRef.current.scrollLeft = clientWidth * 0.997 * (currentCardIndex - 1);
    setCurrentCardIndex(prevState => prevState - 1);
  };

  const onClickRightButton = () => {
    if (!sliderRef.current) return;

    const { clientWidth } = sliderRef.current;

    if (currentCardIndex >= cardList.length - 1) {
      sliderRef.current.scrollLeft = 0;
      setCurrentCardIndex(0);
      return;
    }

    sliderRef.current.scrollLeft = clientWidth * 0.997 * (currentCardIndex + 1);
    setCurrentCardIndex(prevState => prevState + 1);
  };

  return (
    <CardSection>
      <CardHeader>
        <h3>보유 카드</h3>
        <Button size="small" bgColor="none" onClickFunc={onClickAddCardButton}>
          +
        </Button>
      </CardHeader>
      <CardContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <LeftButton
              size="small"
              bgColor="none"
              onClickFunc={onClickLeftButton}
            >
              <Arrow direction="left" />
            </LeftButton>
            <CardCarousel ref={sliderRef}>
              {cardList.map(
                ({
                  id,
                  cardColor,
                  cardCompany,
                  cardName,
                  cardOwnerName,
                  cardNumber,
                  validDate,
                }) => (
                  <Card
                    id={id}
                    bgColor={cardColor}
                    cardName={cardName}
                    company={cardCompany}
                    number={splitCardNumbers(
                      encryptCardNumber(cardNumber),
                      ' ',
                    )}
                    ownerName={cardOwnerName}
                    validDate={makeValidDate(validDate)}
                    size="small"
                    key={id}
                    onClickFunc={onClickDeleteCard}
                  />
                ),
              )}
            </CardCarousel>
            <RightButton
              size="small"
              bgColor="none"
              onClickFunc={onClickRightButton}
            >
              <Arrow direction="right" />
            </RightButton>
          </>
        )}
      </CardContainer>
      <Description>
        {'계좌정보 변경은 '}
        <span>{'설정>계좌정보'}</span>
        {'에서 하실 수 있습니다.'}
      </Description>
    </CardSection>
  );
}

export default HoldingCards;
