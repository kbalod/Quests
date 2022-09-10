export type Quest ={
    "id": number,
    "title": string,
    "description": string,
    "previewImg": string,
    "coverImg": string,
    "type": string,
    "level": string,
    "peopleCount": number[],
    "duration": number,
}

export type Quests = Quest[]

export type Order ={
    "name": string,
    "peopleCount": number | string,
    "phone": string,
    "isLegal": boolean,
}

export type QuestLevelType ={
    easy: string,
    medium: string,
    hard: string,
    [key: string]: string,
}