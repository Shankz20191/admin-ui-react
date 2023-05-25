/* eslint-disable react/prop-types */
import { FiTrash2, FiEdit } from 'react-icons/fi';
import './Actions.css';
const Actions = ({ handleClickTrash, handleClickEdit }) => {
  return (
    <>
      <span>
        <FiEdit onClick={handleClickEdit} />
      </span>
      <span className='red'>
        <FiTrash2 onClick={handleClickTrash} />
      </span>
    </>
  );
};
export default Actions;
