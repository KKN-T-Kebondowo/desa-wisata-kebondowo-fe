import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Do whatever you want
  return NextResponse.json(
    {
      message: "Article data successfully received",
      data: [
        {
          id: 1,
          picture_url:
            "https://res.cloudinary.com/dk0z4ums3/image/upload/v1594099345/attached_image/ini-manfaat-konsumsi-kopi-hitam-dan-efek-sampingnya-untuk-kesehatan.jpg",
          caption: "Kopi Khas Kebondowo",
          created_at: "2021-01-01 00:00:00",
          updated_at: "2021-01-01 00:00:00",
        },
        {
          id: 2,
          picture_url:
            "https://upload.wikimedia.org/wikipedia/commons/e/e2/Rawa_Pening_Central_Java.jpg",
          caption: "Rawa Pening",
          created_at: "2021-01-01 00:00:00",
          updated_at: "2021-01-01 00:00:00",
        },
      ],
    },
    { status: 200 }
  );
}
