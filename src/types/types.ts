export interface Character {
  [x: string]: unknown;
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  episode: string[];
  created: string;
}

export interface CharacterResponse {
  results: Character[];
  info: CharacterInfo;
}
export interface EpisodeResponse {
  results: Episode[];
  info: CharacterInfo;
}
export interface LocationResponse {
  results: Location[];
  info: CharacterInfo;
}
export type CharacterProps = {
  item: Character;
};

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export type LocationProps = {
  item: Location;
};

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  url: string;
  created: string;
}

export type EpisodeProps = {
  item: Episode;
};

export type PaginationInfoProps = {
  paginationInfo: CharacterInfo;
  onPageChanged: (pageNumber: number) => void;
  currentPage: number;
};

export type CharacterInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type FilterInfoProps = {
  onFilterChanged: (filterData: FilterProps) => void;
  filterData: FilterProps;
};

export type FilterProps = {
  status: string;
  gender: string;
  search: string;
};
export type ContentType = {
  contentType: string;
};

export type Images = string[];
