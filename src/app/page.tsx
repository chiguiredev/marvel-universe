import { getCharacters } from "@/resources/getCharacters";
import { CharacterGrid } from "@/components/character/CharacterGrid/CharacterGrid";
import { CharacterCard } from "@/components/character/CharacterCard/CharacterCard";

export default async function Home() {
  const data = await getCharacters();

  return (
    <main>
      <CharacterGrid>
        {data.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CharacterGrid>
    </main>
  );
}
