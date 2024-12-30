// src/lib/types.ts
export interface DictionaryEntry {
    word: string;
    phonetics: Array<{
      text: string;
      audio: string;
    }>;
    meanings: Array<{
      partOfSpeech: string;
      definitions: Array<{
        definition: string;
        example?: string;
      }>;
    }>;
  }
  