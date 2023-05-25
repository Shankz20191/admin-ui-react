/* eslint-disable react/prop-types */
import TBody from './TBody';
import THead from './THead';
import './Table.css';
const Table = ({ users, handleClickTrash, handleClickEdit, deleteUsers }) => {
  return (
    <table>
      <THead users={users} deleteUsers={deleteUsers} />
      <TBody
        users={users}
        handleClickTrash={handleClickTrash}
        handleClickEdit={handleClickEdit}
        deleteUsers={deleteUsers}
      />
    </table>
  );
};
export default Table;
