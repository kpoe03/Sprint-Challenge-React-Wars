import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Pagination.scss';

const PaginationNext = (props) => {
  return (
    <Pagination className='pagination-footer'>
      <PaginationItem onClick={props.onClick}>
        <PaginationLink previous />
      </PaginationItem>
      <PaginationItem onClick={props.onClick}>
        <PaginationLink next />
      </PaginationItem>
    </Pagination>
  );
}
export default PaginationNext;