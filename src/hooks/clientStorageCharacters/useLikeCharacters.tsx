import { useState, useEffect } from "react";
import { ClientStorage } from "@/clientStorage/clientStorage";
import { Character } from "@/types/characterTypes";

export function useLikeCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const likedCharacters =
      ClientStorage.getAllItemsWithKeySubstring<Character>("liked-character-");

    setCharacters(likedCharacters);
    setIsLoading(false);
  }, []);

  return { characters, isLoading };
}
