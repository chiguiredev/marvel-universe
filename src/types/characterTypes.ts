export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: ComicList;
  series: SeriesList;
  stories: StoryList;
  events: EventList;
  urls: Url[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface ComicList {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}

export interface SeriesList {
  available: number;
  collectionURI: string;
  items: SeriesItem[];
  returned: number;
}

export interface StoryList {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
}

export interface EventList {
  available: number;
  collectionURI: string;
  items: EventItem[];
  returned: number;
}

export interface ComicItem {
  resourceURI: string;
  name: string;
}

export interface SeriesItem {
  resourceURI: string;
  name: string;
}

export interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

export interface EventItem {
  resourceURI: string;
  name: string;
}

export interface Url {
  type: string;
  url: string;
}
