export interface Tourism {
  id: number;
  title: string;
  slug: string;
  description: string;
  cover_picture_url: string;
  address: string;
  latitude: number;
  longitude: number;
  pictures: TourismPicture[];
  created_at: string;
  updated_at: string;
}

interface TourismPicture {
  id: number;
  wisata_id: number;
  caption: string;
  picture_url: string;
  created_at: string;
  updated_at: string;
}

export interface AllTourismResponse {
  tourisms: Tourism[];
}

export interface OneTourismResponse {
  tourism: Tourism;
}
