import { LikedCharacters } from "./LikedCharacters";
import { Header } from "@/components/header/Header";
import { Providers } from "../Providers";

export default function Home() {
  return (
    <main>
      <Providers>
        <>
          <Header />
          <LikedCharacters />
        </>
      </Providers>
    </main>
  );
}
