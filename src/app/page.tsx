import { getCharacters } from "@/resources/getCharacters";
import { CharacterGrid } from "@/components/character/CharacterGrid/CharacterGrid";
import { CharacterCard } from "@/components/character/CharacterCard/CharacterCard";
import { Header } from "@/components/header/Header";
import { Providers } from "./Providers";

export default async function Home() {
  const data = await getCharacters();

  return (
    <main>
      <Providers>
        <>
          <Header />
          <CharacterGrid>
            {data.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </CharacterGrid>
        </>
      </Providers>
    </main>
  );
}
