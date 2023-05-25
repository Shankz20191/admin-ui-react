/* eslint-disable react/prop-types */
import { usePagination } from '../Hooks/usePagination';
import { DOTS } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';
import './Pagination.css';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  let paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  if (currentPage === 0 && paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  const onFirst = () => {
    onPageChange(1);
  };

  const onLast = () => {
    onPageChange(paginationRange[paginationRange.length - 1]);
  };

  let lastPage = paginationRange?.[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onFirst}
      >
        <div className='arrow left' />
        <div className='arrow left' />
      </li>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrev}
      >
        <div className='arrow left' />
      </li>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className='pagination-item dots' key={uuidv4()}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className='arrow right' />
      </li>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onLast}
      >
        <div className='arrow right' />
        <div className='arrow right' />
      </li>
    </ul>
  );
};

export default Pagination;
