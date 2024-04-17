import { Character } from "@/types/characterTypes";
import styles from "./CharacterCard.module.scss";

type CharacterCardProps = {
  character: Character;
};

export function CharacterCard({ character }: CharacterCardProps): JSX.Element {
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
        <div>H</div>
      </div>
    </div>
  );
}
