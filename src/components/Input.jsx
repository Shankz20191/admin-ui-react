/* eslint-disable react/prop-types */
import './Input.css';
const Input = ({
  placeHolder,
  handleChange,
  type,
  value,
  name = 'search',
  checked,
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={(e) => handleChange(e)}
      name={name}
      checked={checked}
      className='input-component'
    />
  );
};
export default Input;
