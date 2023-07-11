//创建一个文件，暂且命名为context.js，导出createContext()的返回值
import { createContext, Dispatch } from 'react';

export type SubI = {
  count: number;
};

export const initialValue: Ancestor = {
  ancestor: 'ancestor',
  ai: { count: 0 },
  bi: { count: 0 },
  ci: { count: 0 }
};

const ancestorContext = createContext<Ancestor & MyDispatch>(initialValue);

export type MyDispatch = {
  dispatch?: React.Dispatch<string>;
};

export default ancestorContext;
interface Ancestor {
  ancestor: string;
  ai: SubI;
  bi: SubI;
  ci: SubI;
}
export type { Ancestor };
export const AContext = createContext<(SubI & MyDispatch) | null>(null);
export const BContext = createContext<(SubI & MyDispatch) | null>(null);
export const CContext = createContext<(SubI & MyDispatch) | null>(null);
