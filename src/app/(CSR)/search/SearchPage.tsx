"use client";

import { UnsplashImage } from "@/models/unsplash-image";
import { FormEvent, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "./search.module.css";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();

    try {
      setIsLoading(true);
      setIsLoadingError(false);
      setSearchResults(null);

      const response = await fetch("/api/search?query=" + query);
      const images: UnsplashImage[] = await response.json();
      setSearchResults(images);

    } catch (error) {
        console.log(error);
        setIsLoadingError(true);
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="search_input">
          <Form.Label>Search Query</Form.Label>
          <Form.Control name="query" placeholder="e.g.: cat" />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Search
        </Button>
      </Form>

      <div className="mt-3">
        {isLoading && <Spinner animation="border" />}
        {isLoadingError && <p>Something went wrong</p>}
        {searchResults?.length == 0 && <p>Nothing Found</p>}
        {searchResults && (
          <>
            {searchResults.map((image: UnsplashImage) => (
              <div key={image.urls.raw}>
                <Image
                  src={image.urls.raw}
                  alt={image.description}
                  width={350}
                  height={350}
                  className={styles.image}
                />
                <br />
                by{" "}
                <Link href={"/users/" + image.user.username}>
                  {image.user.username}
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
