import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchOstaniData } from "../../helpers/fetchData";

const columns = [
  
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "nemad",
    headerName: "نام نماد",
    width: 80,
    editable: true,
  },
  {
    field: "nav",
    headerName: "ارزش خالص دارایی",
    width: 150,
    editable: true,
  },
  {
    field: "pnav",
    headerName: "نسبت قیمت به ارزش خالص دارایی",
    width: 250,
    editable: true,
  },
  {
    field: "longTermInvestment",
    headerName: "مقدار سرمایه گذاری بلند مدت",
    width: 200,
    sortable : true,
  },
  {
    field: "mc",
    headerName: "ارزش بازار",
    sortable: true,
    width: 180,
  },
  {
    field: "NI",
    headerName: "سود خالص",
    sortable: true,
    width: 160,
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const res = fetchOstaniData();
    setRows(res);
  }, []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <h2 className="font-bold text-lg my-7">جدول سهام های استانی</h2>
      <DataGrid
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
