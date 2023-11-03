import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange, list }) => {
  const pageButtons = [];

  for (let page = 1; page <= totalPages; page++) {
    pageButtons.push(
      <Button
        key={page}
        colorScheme={page === currentPage ? 'blue' : 'gray'}
        onClick={() => onPageChange(page, list)}
      >
        {page}
      </Button>,
    );
  }

  return (
    <HStack spacing={2} mt={4}>
      {pageButtons}
    </HStack>
  );
};

export default Pagination;
