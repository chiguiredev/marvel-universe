export class ClientStorage {
  static setItem<T>(key: string, value: T): T | null {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      return value;
    } catch (error) {
      console.error("Error saving to localStorage", error);
      return null;
    }
  }

  static getItem<T>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return null;
      } else {
        return JSON.parse(serializedValue) as T;
      }
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return null;
    }
  }

  static removeItem(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error("Error removing item from localStorage", error);
      return false;
    }
  }

  static getAllItemsWithKeySubstring<T>(substring: string): T[] {
    const items: T[] = [];

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.includes(substring)) {
          const item = localStorage.getItem(key);
          if (item !== null) {
            items.push(JSON.parse(item) as T);
          }
        }
      }
    } catch (error) {
      console.error("Error retrieving items from localStorage", error);
    }
    return items;
  }
}
