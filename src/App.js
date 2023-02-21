import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import './App.css'

export default function SimpleTable() {
  const [pageSize, setPageSize] = React.useState(100);
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10000,
    editable: true,
  });
  return (
    <div>
      <div className="navBar">

      </div>
      <div className="center-content">
        <div style={{ minWidth: '15%' }}>
          <div className="sideBar">

          </div>
        </div>

        <div style={{ minWidth: '85%' }}>
          <div className="my-Table">
            <Box sx={{ height: 520, width: '100%' }}>
              <DataGridPro
                {...data}
                loading={data.rows.length === 0}
                rowHeight={38}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20]}
                pagination
                {...data}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
