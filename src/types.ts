// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti

export interface ICharacter {
  id: string;
  name?: string;
  birthYear?: number;
  eyeColor?: string;
  hairColor?: string;
  height?: number;
  mass?: number;
}

export interface ICharacterConnection {
  characters: Array<ICharacter>
}

export interface IFilm {
  id: string;
  episodeID: number
  title: string
  openingCrawl: string
  characterConnection: ICharacterConnection
}

export interface AllFilms {
  films: Array<IFilm>
}

export interface FilmsFromGraphQL {
  allFilms?: AllFilms
}

export interface CharacterFromGraphQL {
  person?: ICharacter
}

export interface AllPeople {
  pageInfo: PageInfo
  people: Array<ICharacter>
}

export interface PageInfo {
  startCursor: string
  endCursor: string
  hasNextPage: boolean
}

export interface CharactersFromGraphQL {
  allPeople?: AllPeople
}
// TODO hér ættum við að útbúa interface fyrir öll gögn sem við vinnum með (t.d. IFilm, IPaging)
// og svör sem við fáum frá GraphQL endapunkti
