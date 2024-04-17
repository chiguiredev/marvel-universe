"use client";

import { Character } from "@/types/characterTypes";
import { FullHeart } from "@/components/icons/FullHeart";
import { EmptyHeart } from "@/components/icons/EmptyHeart";
import { useSetLikedCharacter } from "@/hooks/clientStorageCharacters/useSetLikedCharacter";
import styles from "./CharacterCard.module.scss";

type CharacterCardProps = {
  character: Character;
};

export function CharacterCard({ character }: CharacterCardProps): JSX.Element {
  const { isLiked, handleLikeClick } = useSetLikedCharacter(character);

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
