import { QuestLevelType } from '../types/types';

export const QuestLevel : QuestLevelType  ={
    'easy' : 'Простой',
    'medium' : 'Средний',
    'hard' : 'Сложный',
} as const

export const SortType : any = {
    All : 'Все квесты',
    Adventures : 'Приключения',
    Horror : 'Ужасы',
    Mystic : 'Мистика',
    Detective :'Детектив',
    SciFi : 'Sci-fi',
} as const