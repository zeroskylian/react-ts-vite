import { StoreApi, create, createStore } from 'zustand';
import createContext from 'zustand/context';
import { produce } from 'immer';

export type Store = {
  ancestor: string;
  ai: { count: number };
  bi: { count: number };
  ci: { count: number };
};

export type StoreAction = {
  updateCount: (type: 'A' | 'B' | 'C', value: number) => void;
};

export const sharedStore = () =>
  createStore<Store & StoreAction>((set, get) => ({
    ancestor: 'ancestor',
    ai: { count: 0 },
    bi: { count: 0 },
    ci: { count: 0 },
    updateCount: (type, count) => {
      switch (type) {
        case 'A':
          set({
            ai: {
              count: get().ai.count + count
            }
          });
          break;
        case 'B':
          set((old) => {
            return produce(old, (draft) => {
              draft.bi.count += count;
            });
          });
          break;
        case 'C':
          set({
            ci: {
              count: get().ci.count + count
            }
          });
          break;
      }
    }
  }));

export const sharedStore1 = () =>
  create<Store>((set, get) => ({
    ancestor: 'ancestor',
    ai: { count: 0 },
    bi: { count: 0 },
    ci: { count: 0 }
  }));

export const { Provider, useStore, useStoreApi } =
  createContext<StoreApi<Store & StoreAction>>();

export const getName = (store: Store) => {
  return { ancestor: store.ancestor };
};

export const getAI = (store: Store) => {
  return store.ai;
};

export const getBI = (store: Store & StoreAction) => {
  return { count: store.bi, updateCount: store.updateCount };
};

export const getCI = (store: Store) => {
  return store.ci;
};
