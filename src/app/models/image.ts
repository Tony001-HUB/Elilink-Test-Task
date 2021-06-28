/**
 * Represents an object,showing images properties
 * This object returns flickr when you request the image.
 */
export interface Image {
  page: string,
  pages: string,
  id: string,
  owner: string,
  title: string,
  server: string,
  url_m: string,
  tags: string
}
