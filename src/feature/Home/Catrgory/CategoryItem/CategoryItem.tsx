import React from 'react';
import Styles from './index.module.css';
import classNames from 'classnames';

export default function CategoryItem() {
  return (
    <div className={Styles.item}>
      <CategoryHeader />
      <CategoryContent />
      <CategoryBottom />
    </div>
  );
}

function CategoryHeader() {
  return (
    <div className={Styles.top}>
      <span className={classNames([Styles['top-userName']])}>Alen</span>
      <span>1月前</span>
      <span>Java</span>
    </div>
  );
}

function CategoryContent() {
  return (
    <div className={Styles.content}>
      <h4>内容文字</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
        repudiandae, ea itaque sunt rerum sapiente possimus illum quis tenetur
        deleniti?
      </p>
    </div>
  );
}

function CategoryBottom() {
  return (
    <div className={Styles.bottom}>
      <ul>
        <li>点赞</li>
        <li>投币</li>
        <li>收藏</li>
      </ul>
    </div>
  );
}
