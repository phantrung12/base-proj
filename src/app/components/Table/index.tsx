import { Pagination, Table } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { ColumnGroupType, TableRowSelection } from 'antd/lib/table/interface';
import React from 'react';

interface Props {
  items?: any[];
  columns?: ColumnType<any>[] | ColumnGroupType<any>[];
  onPageChange?: (page: number, pageSize: number) => void;
  rowSelection?: TableRowSelection<any>;
  pageSize?: number;
}

const AntdTable = ({ columns, items, onPageChange, rowSelection }: Props) => {
  return (
    <div>
      <Table
        pagination={false}
        dataSource={items}
        columns={columns}
        rowSelection={rowSelection}
      />
      <Pagination onChange={onPageChange} defaultPageSize={10} />
    </div>
  );
};

export default AntdTable;
