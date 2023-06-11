import type { Base64 } from '$lib/utils/b64';

export type ID = string;

export type Quiz = {
  title: string;
  questions: Question[];
  createdAt: Date;
};

export type Question = {
  question: string;
  image?: Base64;
};
