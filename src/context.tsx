import React, { useContext, useState } from 'react';
import { Input } from 'antd';

type AppContextType = {
  username: string;
  setUserName: (s: string) => void;
};

const AppContext = React.createContext<AppContextType | null>(null);

function Navbar() {
  const context = useContext(AppContext);
  return (
    <div>
      <p>Nav name: {context?.username}</p>
    </div>
  );
}

function Messages() {
  const context = useContext(AppContext);
  return (
    <div>
      <p>Messages name: {context?.username}</p>
      <Input
        value={context?.username}
        onChange={(e) => {
          context?.setUserName(e.target.value);
        }}
      />
    </div>
  );
}

export function TestUseContext() {
  const [name, setName] = useState('name');
  const updateName = (name: string) => {
    setName(name);
  };
  return (
    <AppContext.Provider value={{ username: name, setUserName: updateName }}>
      <Navbar />
      <Messages />
    </AppContext.Provider>
  );
}
