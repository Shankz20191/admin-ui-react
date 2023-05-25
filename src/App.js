import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';
import useFetch from './Hooks/useFetch';
import { searchQuery } from './utils/searchQuery';
import Pagination from './components/Pagination';
import { checkedUsers } from './utils/checkedUsers';
import Modal from './components/Modal';

const url =
  'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

const PageSize = 10;

function App() {
  const [users, setUsers] = useState([]);
  const [apiData, serverError] = useFetch(url);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});

  const filteredUsers = useMemo(() => {
    return searchQuery(query, users);
  }, [query, users]);

  useEffect(() => {
    if (apiData) {
      setUsers(apiData);
    }
  }, [apiData]);

  const currentTable = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredUsers
      ? filteredUsers.slice(firstPageIndex, lastPageIndex)
      : {};
  }, [currentPage, filteredUsers]);

  const handleClickTrash = (id) => {
    const newUsers = users.filter((user) => {
      if (user.id === id) {
        return false;
      }
      return true;
    });
    setUsers(newUsers);
  };

  const handleCheckUsers = (e) => {
    const { name, checked } = e.target;
    const newUsers = checkedUsers(name, checked, currentTable, users);
    setUsers(newUsers);
  };

  const handleClickEdit = (user) => {
    setIsModalOpen(true);
    setUserToEdit(user);
  };

  const handleDelete = () => {
    const newUsers = users.filter((user) => {
      return user?.isChecked !== true;
    });
    setUsers(newUsers);
  };

  const handleSubmit = (formData) => {
    const newUsers = users.map((user) => {
      if (user.id === formData.id) {
        return formData;
      }
      return user;
    });

    setUsers(newUsers);

    setIsModalOpen(false);
  };

  return (
    <main>
      <section>
        <article className='input'>
          <Input
            placeHolder='Search by name email or role'
            handleChange={(e) => setQuery(e.target.value)}
            value={query}
            type='text'
          />
        </article>
        <article className='table'>
          {serverError ? (
            <h2>Something went wrong</h2>
          ) : (
            <Table
              users={currentTable}
              handleClickTrash={handleClickTrash}
              handleClickEdit={handleClickEdit}
              deleteUsers={(e) => handleCheckUsers(e)}
            />
          )}
          {isModalOpen && (
            <Modal
              closeModal={() => setIsModalOpen(false)}
              defaultValues={userToEdit}
              onSubmit={handleSubmit}
            />
          )}
        </article>
        <article className='pagination'>
          {currentTable.filter((user) => user?.isChecked !== true).length <
            currentTable.length && (
            <button type='button' onClick={handleDelete}>
              Delete Selection
            </button>
          )}
          <Pagination
            className='pagination-bar'
            currentPage={currentPage}
            totalCount={filteredUsers.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </article>
      </section>
    </main>
  );
}

export default App;
