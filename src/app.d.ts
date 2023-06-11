// See https://kit.svelte.dev/docs/types#app

import type { Base64 } from '$lib/utils/b64';

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  namespace Quizzes {
    type Question = {
      question: string;
      image?: Base64;
    };
  }
}

export {};
