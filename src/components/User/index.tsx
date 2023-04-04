import React from 'react';
import Styles from './index.module.css';
import Register from './Register';
const UserData = [
  { name: '张三', age: 20, gender: '男', natio: '汉族' },
  { name: '李四', age: 18, gender: '女', natio: '满族' },
  { name: '王五', age: 20, gender: '男', natio: '汉族' },
  { name: '赵六', age: 20, gender: '男', natio: '汉族' }
];

export default function User() {
  return (
    <div className={Styles.container}>
      <table border={1}>
        <caption>人员信息</caption>
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>民族</th>
          </tr>
        </thead>
        <tbody>
          {UserData.map((user) => {
            return (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.natio}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <td colSpan={4} style={{ textAlign: 'right' }}>
            合计{UserData.length}人
          </td>
        </tfoot>
      </table>
      <Register />
    </div>
  );
}
