import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Table from './Table';

const User = () => {
    const { login } = useParams();
    const [row, setrow] = useState([]);
    const [loading, isloading] = useState(true);
    useEffect(() => {
        getData();
      }, []);
    async function getData() {
        const res = await axios.get(`https://api.github.com/search/users?q=${login}`);
        console.log(res.data)
        setrow(res.data.items)
        isloading(false);
        };

  return (
    <>
    {loading ? (
        "loading"
      ) : (
          <>
          
              <Table rows={row}/>
          </>
      )}

    </>
  )
}

export default User