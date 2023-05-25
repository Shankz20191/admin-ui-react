import Input from './Input';

/* eslint-disable react/prop-types */
const THead = ({ users, deleteUsers }) => {
  if (!users || JSON.stringify(users) === '{}') {
    return null;
  }
  const allKeys = Object.keys(Object.assign({}, ...users));

  allKeys.push('Actions');

  const renderItems = allKeys
    .filter((key) => key !== 'id' && key !== 'isChecked')
    .map((key) => {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      return <th key={key}>{capitalizedKey}</th>;
    });

  return (
    <thead>
      <tr>
        <th>
          <Input
            type='checkbox'
            handleChange={deleteUsers}
            name='allSelect'
            checked={
              users.filter((user) => user?.isChecked !== true).length < 1
            }
          />
        </th>
        {renderItems}
      </tr>
    </thead>
  );
};
export default THead;
