/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Modal.css';
const Modal = ({ closeModal, defaultValues, onSubmit }) => {
  const [formData, setFormData] = useState(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className='modal-container'
      onClick={(e) => {
        if (e.target.className === 'modal-container') {
          closeModal();
        }
      }}
    >
      <div className='modal'>
        <form action='' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input name='name' value={formData.name} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='role'>Role</label>
            <select name='role' value={formData.role} onChange={handleChange}>
              <option value='member'>member</option>
              <option value='admin'>admin</option>
            </select>
          </div>
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
