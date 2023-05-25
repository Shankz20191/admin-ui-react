/* eslint-disable react/prop-types */
import Actions from './Actions';
import Input from './Input';
const TBody = ({ users, handleClickTrash, handleClickEdit, deleteUsers }) => {
  if (!users || JSON.stringify(users) === '{}') {
    return null;
  }

  const renderItems = users.map((user) => {
    const { id, name, email, role } = user;
    return (
      <tr key={id}>
        <td>
          <Input
            type='checkbox'
            handleChange={deleteUsers}
            name={name}
            users={users}
            checked={user?.isChecked || false}
          />
        </td>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>{email}</p>
        </td>
        <td>
          <p>{role}</p>
        </td>
        <td>
          <Actions
            handleClickTrash={() => handleClickTrash(id)}
            handleClickEdit={() => handleClickEdit(user)}
          />
        </td>
      </tr>
    );
  });
  return <tbody>{renderItems}</tbody>;
};
export default TBody;
