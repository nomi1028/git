import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './style.css'
import { useNavigate } from "react-router-dom";


const columns = [
  { field: 'login', headerName: 'Login', width: 200 },
  { field: 'type', headerName: 'Type', width: 200 },
  
  {
    field: 'avatar_url',
    headerName: 'Avatar',
    type: 'string',
    width: 200,
    sortable: false,
    renderCell: (params) => <img style={{borderRadius:"50%", width:"40px", height:"40px"}} src={params.value} alt = "not Available"/>
  },

 
];
 




export default function Table(props) {
  let navigate = useNavigate();
  const handler=()=>{
    navigate(`/`);
  }

    console.log(props.rows,'props data')
    const {rows}=props
    
    

  return (
    <>
    <div className='btn' onClick={handler}>
    <h3>Back</h3>
      
    </div>
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
    </div>
    
    </>


  );
}
