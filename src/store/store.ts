import { create, createStore } from 'zustand';

export type Store = {
  ancestor: string;
  ai: { count: number };
  bi: { count: number };
  ci: { count: number };
};

export const sharedStore = createStore<Store>((set, get) => ({
  ancestor: 'ancestor',
  ai: { count: 0 },
  bi: { count: 0 },
  ci: { count: 0 }
}));

export const useStore = create<Store>((set, get) => ({
  ancestor: 'ancestor',
  ai: { count: 0 },
  bi: { count: 0 },
  ci: { count: 0 }
}));

export const getName = (store: Store) => {
  return { ancestor: store.ancestor };
};

export const getAI = (store: Store) => {
  return store.ai;
};

export const getBI = (store: Store) => {
  return store.bi;
};

export const getCI = (store: Store) => {
  return store.ci;
};
