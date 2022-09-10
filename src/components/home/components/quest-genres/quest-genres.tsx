import * as S from '../quests-catalog/quests-catalog.styled';
import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { SortType } from '../../../../const/const';

const IconGenre : any = {
    All : <IconAllQuests/>,
    Detective: <IconDetective/>,
    Adventures:<IconAdventures/>,
    Horror: <IconHorrors/>,
    Mystic : <IconMystic/>,
    SciFi : <IconMystic/>,
  } as const

  type Genres = {
    genre: string;
    handleOnClick: ((e : any)=> void);
  }

function QuestsGenres ({genre,handleOnClick} : Genres) : JSX.Element {
    return(
        <S.TabItem onClick={handleOnClick} id={genre}>
          <S.TabBtn>
            {IconGenre[genre]}
              <S.TabTitle >{SortType[genre]}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
    )
}

export default QuestsGenres;