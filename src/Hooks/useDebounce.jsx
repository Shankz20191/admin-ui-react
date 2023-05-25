// const debounce = (cb, delay = 1000) => {
//   let timer;

import { useEffect, useState } from 'react';

//   return (...arg) => {
//     clearInterval(timer);
//     timer = setTimeout(() => {
//       cb(...arg);
//     }, delay);
//   };
// };

// export { debounce };

const useDebounce = (value, delay = 1000) => {
  const [debounceValue, setDeBounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeBounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
