/* @flow */

export type ArtworkImage = {
  type: 'main' | 'additional' | 'view-in-a-room' | 'static',
  original: {
    width: number,
    height: number,
    url: string,
    component?: React$Element<*>,
  },
  thumbnail: {
    width: number,
    height: number,
    url: string,
  },
}

export type Artwork = {|
  id: number,
  category: string,
  description: string,
  width: number,
  height: number,
  idUserArt: string,
  legacyId: string,
  userId: number,
  images: Array<ArtworkImage>,
  isFavoritedByViewer: boolean,
  likes: number,
  title: string,
  materials: Array<string>,
  styles: Array<string>,
  keywords: Array<string>,
  keywordsMatchingSubjectsOrStyles: Array<string>,
  subject: string,
|}

export type AlgoliaArtwork = {
  artId: number,
  artworkId: number,
  artist_artworks_url: string,
  artwork_title: string,
  artwork_url: string,
  category: string,
  first_name: string,
  id_user: string,
  image_url: string,
  last_name: string,
  min_print_price: ?number,
  price: number,
  sku: string,
}

export type VisiiArtwork = {
  explore_url: string,
  id: string,
  metadata: {
    artist_name: string,
    artist_url: string,
    artwork_url: string,
    category: string,
    height: number,
    image_url: string,
    price: number,
    product_page: string,
    sku: string,
    starting_print_price: ?number,
    title: string,
    width: number,
  },
}

export type TransformedArtwork = {
  aspectRatio: number,
  artistName: string,
  artistId: number,
  artworkId: number,
  imageUrl: string,
  minPrintPrice: ?number,
  price: number,
  productPage: string,
  sku: string,
  title: string,
}

export type ImageProps = {
  autoScale?: 'x' | 'y' | 'square',
  fixedDimensionSize?: number,
}

export type ArtistBadge = {
  description: string,
  image: string,
  title: string,
}

export type ArtistVideo = {
  poster: string,
  url: string,
  id: string,
}

export type Artist = {
  avatar: string,
  badges: Array<ArtistBadge>,
  city: ?string,
  country: ?string,
  description: ?string,
  firstName: string,
  id: number,
  lastName: string,
  profileUrl: string,
  video: ?ArtistVideo,
  largeStudioPic: ?string,
  styles: Array<string>,
  joinDate: string,
}

export type ArtDetailResponse = {
  artwork: Artwork,
  artist: Artist,
  userId: string,
  artworkId: string,
}
