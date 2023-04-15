import React from 'react';
import Styles from './index.module.css';
import classNames from 'classnames';
import CategoryItem from './CategoryItem//CategoryItem';

export default function Category() {
  return (
    <div className={Styles.container}>
      <CategoryItem />
      <CategoryItem />
    </div>
  );
}
