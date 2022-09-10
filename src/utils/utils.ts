import { Quests } from "../types/types";

export const getQuestByGenre = (quests:Quests) : {[key: string]: Quests} => ({
  Horror: quests.filter((quest) => quest.type === 'horror'),
  Mystic: quests.filter((quest) => quest.type === 'mystic'),
  Detective: quests.filter((quest) => quest.type === 'detective'),
  Adventures: quests.filter((quest) => quest.type === 'adventures'),
  SciFi: quests.filter((quest) => quest.type === 'sci-fi'),
  All: quests.filter((quest) => quest.type),
  });