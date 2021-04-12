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

export interface IAllFilms {
  films: Array<IFilm>
}

export interface IFilmsFromGraphQL {
  allFilms?: IAllFilms
}

export interface ICharacterFromGraphQL {
  person?: ICharacter
}

export interface IAllPeople {
  pageInfo: IPageInfo
  people: Array<ICharacter>
}

export interface IPageInfo {
  startCursor: string
  endCursor: string
  hasNextPage: boolean
}

export interface ICharactersFromGraphQL {
  allPeople?: IAllPeople
}
// TODO hér ættum við að útbúa interface fyrir öll gögn sem við vinnum með (t.d. IFilm, IPaging)
// og svör sem við fáum frá GraphQL endapunkti
