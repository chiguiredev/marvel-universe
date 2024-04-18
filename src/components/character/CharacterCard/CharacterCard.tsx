"use client";

import { Character } from "@/types/characterTypes";
import { FullHeart } from "@/components/icons/FullHeart";
import { EmptyHeart } from "@/components/icons/EmptyHeart";
import { useLikedCharactersContext } from "@/context/likedCharactersContext";
import styles from "./CharacterCard.module.scss";
import { useEffect, useState } from "react";

type CharacterCardProps = {
  character: Character;
};

export function CharacterCard({ character }: CharacterCardProps): JSX.Element {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const { likedCharacters, isCharacterLiked, likeCharacter, unlikeCharacter } =
    useLikedCharactersContext();

  function handleLikeClick() {
    if (!isCharacterLiked(character)) {
      likeCharacter(character);
      setIsLiked((prevState) => !prevState);
    } else {
      unlikeCharacter(character);
      setIsLiked((prevState) => !prevState);
    }
  }

  useEffect(() => {
    setIsLiked(isCharacterLiked(character));
  }, [likedCharacters]);

  return (
    <div className={styles.character_card}>
      <img
        className={styles.character_card__image}
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        alt={character.name}
      />
      <div className={styles.character_card__filler}></div>
      <div className={styles.character_card__content}>
        <p>{character.name}</p>
        <button
          className={styles.character_card__button}
          onClick={handleLikeClick}
        >
          {isLiked ? <FullHeart /> : <EmptyHeart />}
        </button>
      </div>
    </div>
  );
}
