// deprecated functions used in material-table so need to make an overide component


import React , {useEffect} from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export default function TablePaginationDemo(props) {
  
  return (
    
    <TablePagination
      component="div"
      count={props.count}
      page={props.page}
      onPageChange={props.onChangePage}
      rowsPerPage={props.rowsPerPage}
      onRowsPerPageChange={props.onChangeRowsPerPage}
      rowsPerPageOptions={props.rowsPerPageOptions}
    />
  );
}
