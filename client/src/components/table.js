import { DataGrid } from '@mui/x-data-grid';
import React, {useState} from 'react';

function Table({shouldUpdateTable, setShouldUpdateTable}) {
  const SERVER = process.env.REACT_APP_SERVER
  const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'value', headerName: 'Value', width: 130 },
      { field: 'phone', headerName: 'Phone', width: 90 },
      { field: 'email', headerName: 'Email', width: 130 },
      { field: 'criteria', headerName: 'Criteria', width: 130 },
      { field: 'day', headerName: 'Day', width: 90 },
      {
          field: 'action',
          headerName: 'Action',
          sortable: false,
          renderCell: (params) => {
            const onClick = (e) => {
              e.stopPropagation(); // don't select this row after clicking
      
              const api = params.api;
              const thisRow = {}
      
              api
                .getAllColumns()
                .filter((c) => c.field !== '__check__' && !!c)
                .forEach(
                  (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                );
                
                fetch(`${SERVER}/alert/`+ thisRow.id,{
                  method: 'DELETE'
                  })
                  .then(() => {console.log('delete successfull'); setShouldUpdateTable(true)})
                  .catch((error) => {
                      console.error('Error:', error);
                  });
            };
            return <button className="btn btn-primary" onClick={onClick}>Delete</button>;
          },
        },
    ]
    let [formData, setformData] = useState([])
    React.useEffect(() => {
      if(setShouldUpdateTable) {
        fetch(`${SERVER}/alert`)
        .then((res) => res.json())
        .then((data) => {console.log('Success:', data); setformData(data); setShouldUpdateTable(false)})
        .catch((error) => {
            console.error('Error:', error);
          });
      }
    }, [shouldUpdateTable])
    return (
      <div style={{ textAlign: "center" }}>
        <div className="centerDiv h-[40vh] w-[100%]">
            <DataGrid
                rows={formData}
                columns={columns}
                pageSize={5}
            />
        </div>
      </div>
    )
}

export default Table