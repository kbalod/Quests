import { Quest } from '../../../../types/types';
import * as S from '../../detailed-quest.styled';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconClock } from '../../../../assets/img/icon-clock.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import { QuestLevel } from '../../../../const/const';
import { BookingModal } from '../components';
import { useState } from 'react';


type DetailsQuestCard ={
    quest?: Quest | null;
    isLoad: boolean;
}

function DetailedQuestCard({quest} : DetailsQuestCard): JSX.Element {
    const [isBookingModalOpened, setIsBookingModalOpened] = useState<boolean>(false);

    function onBookingBtnClick() : void {
      setIsBookingModalOpened(true);
    };

return(
<>
    {!quest ? '' :
         <S.Main>
         <S.PageImage
         src={`http://localhost:3000/${quest?.coverImg}`}
         alt={`Квест ${quest?.title}`}
         width="1366"
         height="768" />
        <S.PageContentWrapper>
            <S.PageHeading>
                <S.PageTitle>{quest.title}</S.PageTitle>
                <S.PageSubtitle>{QuestLevel[quest.type]}</S.PageSubtitle>
            </S.PageHeading>

            <S.PageDescription>
                <S.Features>
                    <S.FeaturesItem>
                        <IconClock width="20" height="20" />
                        <S.FeatureTitle>{`${String(quest.duration)} мин`}</S.FeatureTitle>
                    </S.FeaturesItem>
                    <S.FeaturesItem>
                        <IconPerson width="19" height="24" />
                        <S.FeatureTitle>{`${quest.peopleCount.join('-')} чел`}</S.FeatureTitle>
                    </S.FeaturesItem>
                    <S.FeaturesItem>
                        <IconPuzzle width="24" height="24" />
                        <S.FeatureTitle>{QuestLevel[quest.level]}</S.FeatureTitle>
                    </S.FeaturesItem>
                </S.Features>
                <S.QuestDescription>
                    {quest.description}
                </S.QuestDescription>
                <S.QuestBookingBtn onClick={onBookingBtnClick}>
                    Забронировать
                </S.QuestBookingBtn>
            </S.PageDescription>
        </S.PageContentWrapper>
        {isBookingModalOpened && <BookingModal setIsBookingModalOpened={setIsBookingModalOpened}/>}
        </S.Main>
        }
    </>
)
}

export default DetailedQuestCard; 