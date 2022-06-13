interface Image {
  filename: string;
  name: string;
  mime: string;
  extension: string;
  url: string;
}
export interface PhotoInterface {
  delete_url: string;
  display_url: string;
  expiration: string;
  height: string;
  id: string;
  image: Image;
  size: number;
  thumb: Image;
  time: string;
  title: string;
  url: string;
  url_viewer: string;
  width: string;
}
