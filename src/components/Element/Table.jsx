import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchOstaniData } from "../../helpers/fetchData";

const columns = [
  {
    field: "NI",
    headerName: "سود خالص",
    sortable: true,
    width: 160,
    cellClassName: "text-center",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "mc",
    headerName: "ارزش بازار",
    sortable: true,
    width: 180,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "longTermInvestment",
    headerName: "مقدار سرمایه گذاری بلند مدت",
    width: 200,
    sortable: true,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "nav",
    headerName: "ارزش خالص دارایی",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "pnav",
    headerName: "نسبت قیمت به ارزش خالص دارایی",
    width: 250,
    editable: true,
    cellClassName: "center",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "nemad",
    headerName: "نام نماد",
    width: 80,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "id",
    headerName: "ID",
    width: 40,
    align: "center",
    headerAlign: "center",
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const res = fetchOstaniData();
    setRows(res);
  }, []);
  return (
    <div style={{ display: "flex", height: "400px", direction: "ltr" }}>
      <div style={{ flexGrow: 1 }}>
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
    </div>
  );
}
