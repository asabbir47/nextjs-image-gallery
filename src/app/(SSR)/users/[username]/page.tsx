import { Alert } from "@/components/bootstrap";
import { UnsplashUser } from "@/models/unsplash-user";
import { notFound } from "next/navigation";
// import {cache} from 'react';

interface PageProps {
  params: {
    username: string;
  };
}

async function getUser(username: String): Promise<UnsplashUser> {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=` +
      process.env.UNSPLASH_ACCESS_KEY
  );

  if (response.status === 404) return notFound();

  return await response.json();
}

export async function generateMetadata({ params: { username } }: PageProps) {
  const user = await getUser(username);

  return {
    title:
      [user.first_name, user.last_name].filter(Boolean).join(" ") +
      " - Image Gallery",
  };
}

// const userCached = cache(getUser); // use only when native fetch is not used

export default async function page({ params: { username } }: PageProps) {
  const user = await getUser(username);

  return (
    <div>
      <Alert>
        User Page - used dynamic metadata title from API Response. described how the fetch operation is called once though defined twice
      </Alert>
      <h2>{user.username}</h2>
      <div>
        <p>{user.first_name}</p>
        <p>{user.last_name}</p>
        <a href={"https://unsplash.com/"+user.username}> {user.username} </a>
      </div>
    </div>
  );
}
