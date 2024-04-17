import { Character } from "@/types/characterTypes";
import { md5 } from "js-md5";

function setRequestUrl(): URL {
  // TODO - Add base url to env file
  const baseUrl = "https://gateway.marvel.com/v1/public/";

  const url = new URL(baseUrl + "characters");

  const ts = Date.now().toLocaleString();

  // TODO - Add public and private key to env file
  const publickey = "de298ca4bb2e27533297b7060f9e621d";
  const privateKey = "e8ebb5d0eec52e6e94a4f56f06032060a8687836";

  const limit = "50";
  const hash = md5(ts + privateKey + publickey);
  const params: Record<string, string> = {
    ts,
    limit,
    hash,
    apikey: publickey,
  };

  for (const key in params) {
    url.searchParams.append(key, params[key]);
  }

  return url;
}

export async function getCharacters(): Promise<Character[]> {
  const url = setRequestUrl();

  let res;
  try {
    res = await fetch(url.toString());

    if (!res.ok) {
      throw new Error("Failed to fetch characters data");
    }
  } catch (error) {
    throw new Error("Failed to fetch characters data" + error);
  }

  let result;
  try {
    result = await res.json();
  } catch (error) {
    throw new Error("Failed to parse characters data" + error);
  }

  const resultData: Character[] = result.data.results;
  return resultData;
}
