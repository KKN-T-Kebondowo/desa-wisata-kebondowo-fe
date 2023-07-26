interface About {
  name: string;
  major: string;
  role: string;
  picture_url: string;
}

export interface AboutResponse {
  about: About[];
}
