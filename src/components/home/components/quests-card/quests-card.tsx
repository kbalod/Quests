import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import { QuestLevel } from '../../../../const/const';
import { Quests } from '../../../../types/types';
import * as S from '../quests-catalog/quests-catalog.styled';

type QuestsCard ={
  quests: Quests
}

function QuestCard({quests}: QuestsCard) {
    return(
        <>
        {quests.map((quest) =>
            <S.QuestItem key={quest.id}>
          <S.QuestItemLink to={`/quest/${quest.id}`}>
            <S.Quest>
              <S.QuestImage
                src={quest.previewImg}
                width="344"
                height="232"
                alt={`квест ${quest.title}`}
              />
  
              <S.QuestContent>
                <S.QuestTitle>{quest.title}</S.QuestTitle>
                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson />
                    {`${quest.peopleCount.join('-')} чел`}
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle />
                    {QuestLevel[quest.level]}
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>
        )}
        </>
    )
}

export default QuestCard;
