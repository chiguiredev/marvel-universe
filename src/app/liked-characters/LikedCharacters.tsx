"use client";

import { CharacterGrid } from "@/components/character/CharacterGrid/CharacterGrid";
import { CharacterCard } from "@/components/character/CharacterCard/CharacterCard";
import { useLikeCharacters } from "@/hooks/clientStorageCharacters/useLikeCharacters";

export function LikedCharacters() {
  const { characters, isLoading } = useLikeCharacters();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && characters.length === 0 && <p>No liked characters</p>}
      {!isLoading && characters.length > 0 && (
        <CharacterGrid>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </CharacterGrid>
      )}
    </>
  );
}
