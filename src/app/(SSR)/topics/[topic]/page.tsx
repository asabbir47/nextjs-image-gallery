import { Alert } from "@/components/bootstrap";
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import styles from "./topic.module.css";

interface PageProps {
  params: {
    topic: string;
  };
}

// export const revalidate = 25;
// export const dynamicParams = false;

export function generateMetadata({ params: { topic } }: PageProps) {
  return {
    title: topic + " - Image Gallery",
  };
}

export function generateStaticParams() {
  return ["health", "coding"].map((topic) => ({ topic }));
}

export default async function page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=9&client_id=` +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div>
      <Alert>
        This page uses <strong>generateStaticParams</strong> to render and cache
        static pages at build time. <br />
        <strong>dynamicParams = false;</strong> can be used to disallow dynamic
        params other than already mentioned params in{" "}
        <strong>generateStaticParams</strong>
      </Alert>
      <h2>{topic}</h2>
      <div style={{display: 'flex',flexWrap: 'wrap'}}>
        {images.map((image) => (
          <div key={image.urls.raw}>
            <Image
              src={image.urls.raw}
              alt={image.description}
              width={350}
              height={350}
              className={styles.image}
            />
            <br />
            
            by <Link href={'/users/'+image.user.username}>{image.user.username}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
