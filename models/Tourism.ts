export interface Tourism {
  id: number;
  title: string;
  slug: string;
  description: string;
  cover_picture_url: string;
  address: string;
  latitude: string;
  longitude: string;
  pictures: TourismPicture[];
  created_at: string;
  updated_at: string;
}

interface TourismPicture {
  id: number;
  wisata_id: number;
  picture_url: string;
}
