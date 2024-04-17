"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./LikeNavLink.module.scss";
import { useLikedCharacterCount } from "@/hooks/clientStorageCharacters/useLikedCharacterCount";

type LikeNavLinkProps = {
  to: string;
};

export const LikeNavLink = ({ to }: LikeNavLinkProps) => {
  const { isClient, likedCharactersCount } = useLikedCharacterCount();
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
