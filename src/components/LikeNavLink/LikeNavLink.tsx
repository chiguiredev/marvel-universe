"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./LikeNavLink.module.scss";
import { useLikedCharactersContext } from "@/context/likedCharactersContext";
import { useEffect, useState } from "react";

type LikeNavLinkProps = {
  to: string;
};

export const LikeNavLink = ({ to }: LikeNavLinkProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { likedCharacters } = useLikedCharactersContext();

  let likedCharactersCount = Object.keys(likedCharacters).length;

  return (
    <Link href={to}>
      <div className={styles.like_nav_link__content}>
        <Image
          src="/images/heart_icon.svg"
          alt="heart icon"
          width={24}
          height={24}
        />
        <p>{isClient && likedCharactersCount}</p>
      </div>
    </Link>
  );
};
