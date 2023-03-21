import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function useFetchData(trigger) {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const {id} = useParams()

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(trigger ? url : url+'/'+ id)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                })
        },1000)
    },[url])

    return [data, loading]
}
