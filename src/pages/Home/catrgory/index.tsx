import React from 'react';
import Styles from './index.module.css';
import classNames from 'classnames';

export default function Category() {
  return (
    <div className={Styles.container}>
      <CategoryItem />
      <CategoryItem />
    </div>
  );
}

function CategoryItem() {
  return (
    <div>
      <span className={classNames([Styles.topItem, Styles.userName])}>
        Name
      </span>
      <span className={Styles.topItem}>1月前</span>
      <span className={Styles.topItem}>Java</span>
    </div>
  );
}
