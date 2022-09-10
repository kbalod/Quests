import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import * as S from './quests-catalog.styled';

import QuestCard from '../quests-card/quests-card';
import NotFound from '../../../not-found/not-found';
import Loading from '../../../loading/loading';
import QuestsGenres from '../quest-genres/quest-genres';

import { SortType } from '../../../../const/const';
import { getQuestByGenre } from '../../../../utils/utils';
import { Quests } from '../../../../types/types';


function QuestsCatalog () : JSX.Element {
  const [isError,setIsError] = useState<boolean>(false);
  const [isLoad,setIsLoad] = useState<boolean>(false);
  const [selectedQuest, setSelectedQuest] = useState<string>('All');
  const [quest,setQuest] = useState<Quests>([]);
  const sortedQuests = getQuestByGenre(quest);

  function handleOnClick(e : { currentTarget: HTMLInputElement; }) : void {
    setSelectedQuest(e.currentTarget.id);
  };

  useEffect(()=> {
    let isMounted = true;

    if (isMounted) {
      axios.get<any>('http://localhost:3001/quests/').then((response: AxiosResponse<any>) => {
        setQuest(response.data);
        setIsLoad(true);
    }).catch(error=> {
      setIsError(true);
      setIsLoad(false);
    });
    }
    return () => {
      isMounted = false;
    };
  },[]);

  if(!isLoad){
    if(isError){
      return <NotFound/>
    }
    return <Loading/>
  }

 return(
  <> 
    <S.Tabs>
      {isLoad && Object.keys(SortType).map((genre : string) => 
        <QuestsGenres key={genre} genre={genre} handleOnClick={handleOnClick}/>
      )}
    </S.Tabs>
    <S.QuestsList>
        {isLoad ?
          <QuestCard quests={sortedQuests[selectedQuest]} /> : ''}
    </S.QuestsList>
  </>
    )
}

export default QuestsCatalog;

