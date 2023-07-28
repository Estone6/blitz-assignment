import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.05,
    sortable: false,
    filterable: false,
  },
  {
    field: "category",
    headerName: "Category",
    flex: 0.2,
  },
  {
    field: "productName",
    headerName: "Product Name",
    flex: 0.2,
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    flex: 0.25,
    sortable: false,
    filterable: false,
  },
  {
    field: "country",
    headerName: "Country",
    flex: 0.15,
    sortable: false,
    filterable: false,
  },
  {
    field: "sales",
    headerName: "SalesData",
    flex: 0.15,
  },
];

export default function CustomTable({ rows }) {
  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 50, 100]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
