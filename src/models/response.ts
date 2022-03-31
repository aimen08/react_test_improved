//generated with https://app.quicktype.io/
export interface Response {
  resultCount: number;
  results: Song[];
}

export interface Song {
  wrapperType: string;
  kind: Kind;
  artistId?: number;
  collectionId?: number;
  trackId: number;
  artistName: string;
  collectionName?: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName: string;
  artistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: Date;
  collectionExplicitness: Explicitness;
  trackExplicitness: Explicitness;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis: number;
  country: Country;
  currency: Currency;
  primaryGenreName: string;
  isStreamable?: boolean;
  collectionArtistId?: number;
  collectionArtistViewUrl?: string;
  trackRentalPrice?: number;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  contentAdvisoryRating?: ContentAdvisoryRating;
  longDescription?: string;
  hasITunesExtras?: boolean;
  shortDescription?: string;
  collectionArtistName?: string;
}

export enum Explicitness {
  Cleaned = "cleaned",
  Explicit = "explicit",
  NotExplicit = "notExplicit",
}

export enum ContentAdvisoryRating {
  Explicit = "Explicit",
  Nr = "NR",
  PG = "PG",
  PG13 = "PG-13",
  R = "R",
}

export enum Country {
  Usa = "USA",
}

export enum Currency {
  Usd = "USD",
}

export enum Kind {
  FeatureMovie = "feature-movie",
  Song = "song",
}
