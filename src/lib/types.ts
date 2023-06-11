import type { Base64 } from '$lib/utils/b64';

export namespace Quizzes {
  export type Question = {
    question: string;
    image?: Base64;
  };
}
