import { Alert } from "@/components/bootstrap";
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incremental Static Regenaration - Image Gallery",
};

export const revalidate = 25;

export default async function page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY,
      {
        // cache: 'no-cache',
        // next: {revalidate: 0},
      }
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">

      <Alert>
        This page <strong>Fetch data dynamically</strong>
      </Alert>  

      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />

      by <Link href={'/users/'+image.user.username}>{image.user.username}</Link>
    </div>
  );
}
