import { useEffect, useState } from "react";
import { ClientStorage } from "@/clientStorage/clientStorage";
import { Character } from "@/types/characterTypes";

export function useSetLikedCharacter(character: Character) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const characterStorageKey = `liked-character-${character.id}`;

  function checkIfLiked() {
    const likedCharacter =
      ClientStorage.getItem<Character>(characterStorageKey);
    if (likedCharacter) {
      setIsLiked(true);
    }
  }

  function handleLikeClick() {
    if (isLiked) {
      ClientStorage.removeItem(characterStorageKey);
      setIsLiked(false);
    } else {
      ClientStorage.setItem(characterStorageKey, character);
      setIsLiked(true);
    }
  }

  useEffect(() => {
    checkIfLiked();
  }, []);

  return { isLiked, handleLikeClick };
}
