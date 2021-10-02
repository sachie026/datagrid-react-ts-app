export interface PaginationProps {
  pageNumber: number;
  limit: number;
  totalCount: number;
  onNext: () => void;
  onPrev: () => void;
  show: boolean;
}

export interface TableRowActionProps {
  name: string;
  onAction: (data: any) => void;
}

export interface TableRowProps {
  [key: string]: any[];
}

export interface DataGridProps {
  pagination?: PaginationProps;
  columns: string[];
  columnLabels: string[];
  rows: any[];
  gridKey: string;
  tableRowActions?: TableRowActionProps[];
  pageLimitValues?: number[];
  selectedPageLimit?: number;
  onPageLimitChange: (newLimit: number) => void;
  noResultLabel?: string;
  loading?: boolean;
  editable?: boolean;
  onEditCellHandler?: (rowData: any) => void;
}
