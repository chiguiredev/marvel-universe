"use client";
import { LikedCharactersProvider } from "@/context/likedCharactersContext";
export function Providers({ children }: { children: JSX.Element }) {
  return <LikedCharactersProvider>{children}</LikedCharactersProvider>;
}
