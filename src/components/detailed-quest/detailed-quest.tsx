import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import DetailedQuestCard from './components/detailed-quest-card/detailed-quest-card';
import Loading from '../loading/loading';
import NotFound from '../not-found/not-found';

import { MainLayout } from '../../components/common/common';
import { Quest } from '../../types/types';


function DetailedQuest() : JSX.Element {
  const [quest,setQuest] = useState<Quest | null>(null);
  const [isLoad,setIsLoad] = useState<boolean>(false);
  const [isError,setIsError] = useState<boolean>(false);

  const currentId = Number(useParams().id);

  useEffect(()=>{
    let isMounted = true;
  if (isMounted) {
    axios.get<any>(`http://localhost:3001/quests/${currentId}`).then((response: AxiosResponse<Quest>) => {
       setQuest(response.data);
       setIsLoad(true);
   }).catch(error => {
     setIsLoad(false);
     setIsError(true);
   });
   } 
  return () => {
    isMounted = false;
    setIsLoad(false);
  };
  }, [currentId])

  if(!isLoad){
    if(isError){
      return <NotFound/>
    }
    return <Loading/>
  }

  return (
    <>
      <MainLayout>
        {isLoad ? <DetailedQuestCard quest={quest} isLoad={isLoad}/> : ''}
      </MainLayout>
    </>
  );
};

export default DetailedQuest;