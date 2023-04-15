import React from 'react';
import Styles from './index.module.css';

export default function Register() {
  return (
    <div className={Styles.register}>
      <form action=''>
        <fieldset>
          <legend>主要信息</legend>
          <label htmlFor='name'>姓名: </label>
          <input type='text' name='name' id='name' />
          <hr />
          <label htmlFor='password'>密码: </label>
          <input type='password' name='password' id='password' />
          <hr />
          <label htmlFor='gender'>性别: </label>
          男
          <input type='radio' name='gender' id='gender' value='male' checked />
          女<input type='radio' name='gender' id='gender' value='famale' />
        </fieldset>
        <fieldset>
          <legend>次要信息</legend>
          <label htmlFor='hobby'>爱好: </label>
          <input
            type='checkbox'
            name='hobby'
            id='hobby'
            value='smoke'
            checked
          />
          &nbsp;抽烟&nbsp;
          <input type='checkbox' name='hobby' id='hobby' value='drink' />
          &nbsp;喝酒&nbsp;
          <input type='checkbox' name='hobby' id='hobby' value='perm' />
          &nbsp;烫头
          <hr />
          <label htmlFor='desc'>其他: </label>
          <textarea name='' id='desc' cols={20} rows={10}></textarea>
        </fieldset>
        <br />
        <input type='submit' value='提交表单' />
        &nbsp;
        <button type='submit' disabled>
          提交表单
        </button>
        <hr />
        <input type='reset' value='重置' />
        &nbsp;
        <button type='reset'>重置</button>
      </form>
    </div>
  );
}
