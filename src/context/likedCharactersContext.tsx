import { createContext, useContext, useEffect, useState } from "react";
import { Character } from "@/types/characterTypes";
import { ClientStorage } from "@/utils/clientStorage/clientStorage";

type likedCharactersContextType =
  | {
      likedCharacters: Record<string, Character>;
      likeCharacter: (character: Character) => void;
      unlikeCharacter: (character: Character) => void;
      isCharacterLiked: (character: Character) => boolean;
    }
  | undefined;

const LikedCharactersContext =
  createContext<likedCharactersContextType>(undefined);

export const LikedCharactersProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [currentLikedCharacters, setCurrentLikedCharacters] = useState<
    Record<string, Character>
  >({});

  useEffect(() => {
    const storedLikedCharactersArray =
      ClientStorage.getAllItemsWithKeySubstring<Character>("liked-character-");

    const storedLikedCharactersRecord = storedLikedCharactersArray.reduce(
      (acc, character) => {
        acc[`liked-character-${character.id}`] = character;
        return acc;
      },
      {} as Record<string, Character>
    );

    setCurrentLikedCharacters(storedLikedCharactersRecord);
  }, []);

  const likeCharacter = (character: Character) => {
    setCurrentLikedCharacters((prevLikedCharacters) => {
      const updatedLikedCharacters = {
        ...prevLikedCharacters,
        [character.id]: character,
      };

      ClientStorage.setItem(`liked-character-${character.id}`, character);

      return updatedLikedCharacters;
    });
  };

  const unlikeCharacter = (character: Character) => {
    setCurrentLikedCharacters((prevLikedCharacters) => {
      const updatedLikedCharacters = { ...prevLikedCharacters };
      delete updatedLikedCharacters[character.id];

      ClientStorage.removeItem(`liked-character-${character.id}`);

      return updatedLikedCharacters;
    });
  };

  const isCharacterLiked = (character: Character) => {
    const result = Boolean(
      currentLikedCharacters[`liked-character-${character.id}`]
    );
    return result;
  };

  return (
    <LikedCharactersContext.Provider
      value={{
        likedCharacters: currentLikedCharacters,
        likeCharacter: likeCharacter,
        unlikeCharacter: unlikeCharacter,
        isCharacterLiked: isCharacterLiked,
      }}
    >
      {children}
    </LikedCharactersContext.Provider>
  );
};

export const useLikedCharactersContext = () => {
  const context = useContext(LikedCharactersContext);

  if (context === undefined) {
    throw new Error(
      "useLikedCharacters must be used within a LikedCharactersProvider"
    );
  }

  return context;
};
