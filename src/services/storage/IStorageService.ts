import { Character, UserMonster, Encounter, NPC } from '../../types/dnd';

export interface IStorageService {
  // Characters
  getAllCharacters(): Promise<Character[]>;
  addCharacter(character: Character): Promise<string>;
  updateCharacter(character: Character): Promise<void>;
  deleteCharacter(id: string): Promise<void>;

  // Custom Monsters
  getAllCustomMonsters(): Promise<UserMonster[]>;
  addCustomMonster(monster: UserMonster): Promise<string>;
  updateCustomMonster(monster: UserMonster): Promise<void>;
  deleteCustomMonster(id: string): Promise<void>;

  // Favorites
  getFavoriteMonsters(): Promise<string[]>;
  addFavorite(monsterId: string): Promise<void>;
  removeFavorite(monsterId: string): Promise<void>;
  isFavorite(monsterId: string): Promise<boolean>;

  // Encounters
  getAllEncounters(): Promise<Encounter[]>;
  getEncounter(id: string): Promise<Encounter | undefined>;
  saveEncounter(encounter: Encounter): Promise<string>;
  deleteEncounter(id: string): Promise<void>;

  // NPCs
  getAllNPCs(): Promise<NPC[]>;
  addNPC(npc: NPC): Promise<string>;
  updateNPC(npc: NPC): Promise<void>;
  deleteNPC(id: string): Promise<void>;
}
