import { derived, get, writable } from 'svelte/store';

import type { Subscriber, Readable, Writable } from 'svelte/store';
import type { ID, Question, Quiz } from '$lib/types';

export type QuizStoreMethods = {
  appendQuestion(id: ID, question: Question): void;
  create(title: string): ID;
  findQuiz(id: ID): Quiz;
  load(): void;
  save(): void;
};

type Inner = {
  quizzes: Record<string, Quiz>;
};

const DEFAULT_VALUE: Inner = {
  quizzes: {}
};

const LOCAL_STORAGE_KEY = 'quizzes';

export class QuizStore {
  private _inner: Writable<Inner>;
  private _derive: Readable<Inner>;

  constructor() {
    this._inner = writable<Inner>(DEFAULT_VALUE);
    this._derive = derived(this._inner, ($inner) => $inner);
  }

  public subscribe(run: Subscriber<Inner>) {
    return this._derive.subscribe(run);
  }

  public create(title: string): ID {
    const id = '1';

    this._inner.update(($inner) => ({
      ...$inner,
      quizzes: {
        ...$inner.quizzes,
        [id]: {
          title,
          questions: [],
          createdAt: new Date()
        }
      }
    }));

    return id;
  }

  public appendQuestion(id: ID, question: Question): void {
    this._inner.update(($inner) => ({
      ...$inner,
      quizzes: {
        ...$inner.quizzes,
        [id]: {
          ...$inner.quizzes[id],
          questions: [...$inner.quizzes[id].questions, question]
        }
      }
    }));
  }

  public findQuiz(id: ID): Quiz {
    const inner = get(this._inner);

    // TODO: Handle invalid id
    return inner.quizzes[id];
  }

  public save(): void {
    const mem = get(this._inner);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mem));
  }

  public load(): void {
    const mem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string);

    if (mem) {
      this._inner.set(mem);
    }
  }
}

export const quizStore = new QuizStore() as unknown as Readable<Inner> &
  QuizStoreMethods;
