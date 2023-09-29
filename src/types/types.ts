export interface Character {
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
  paginationInfo: {
    count: number;
    pages: number;
    next: null | "string";
    prev: null | "string";
  };
  onPageChanged: (pageNumber: number) => void;
  currentPage: number;
};

export type ContentType = {
  contentType: string;
};

export type Images = string[];
