export interface UMKM {
  id: number;
  title: string;
  slug: string;
  description: string;
  cover_picture_url: string;
  contact: string;
  contact_name: string;
  visitor: number;
  latitude: number;
  longitude: number;
  pictures: UMKMPicture[];
  created_at: string;
  updated_at: string;
}

interface UMKMPicture {
  id: number;
  wisata_id: number;
  caption: string;
  picture_url: string;
  created_at: string;
  updated_at: string;
}

export interface AllUMKMResponse {
  umkms: UMKM[];
}

export interface OneUMKMResponse {
  umkm: UMKM;
}
