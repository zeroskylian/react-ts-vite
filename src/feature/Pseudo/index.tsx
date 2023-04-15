import React, { PropsWithChildren } from 'react';
import Styles from './index.module.css';

const Pseudo: React.FC = () => {
  return (
    <div className={Styles.container}>
      <span>Title</span>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </div>
  );
};

export default Pseudo;
