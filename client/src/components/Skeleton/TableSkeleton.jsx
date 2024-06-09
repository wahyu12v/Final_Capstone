import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { range } from 'underscore';

const TableSkeleton = ({ col, rows }) => {
  const columns = range(col).map((i) => {
    return (
      <th key={i}>
        <h1 style={{ margin: 20 }}>
          <Skeleton />
        </h1>
      </th>
    );
  });

  const rowColumns = range(col).map((i) => {
    return (
      <td key={i} style={{ paddingInline: 20 }}>
        <Skeleton />
      </td>
    );
  });

  const rowsGen = range(rows).map((i) => {
    return <tr key={i}>{rowColumns}</tr>;
  });

  return (
    <table width="100%">
      <thead>
        <tr>{columns}</tr>
      </thead>
      <tbody>{rowsGen}</tbody>
    </table>
  );
};

export default function TableSkeletonCustom({ col, rows }) {
  return (
    <SkeletonTheme>
      <TableSkeleton col={col} rows={rows} />
    </SkeletonTheme>
  );
}
