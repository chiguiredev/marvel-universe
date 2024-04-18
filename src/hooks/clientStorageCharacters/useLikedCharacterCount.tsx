import { ClientStorage } from "@/utils/clientStorage/clientStorage";
import { useState, useEffect } from "react";

export const useLikedCharacterCount = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  let likedCharactersCount =
    ClientStorage.getAllItemsWithKeySubstring("liked-character-").length;

  return { isClient, likedCharactersCount };
};
