import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function useFetchData(trigger, type) {
    const url = `https://jsonplaceholder.typicode.com`;
    const typeUrl = type !== "" ? url + type : "Error fetch";

    const {id} = useParams()

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(trigger ? typeUrl : typeUrl +'/'+ id)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);

                })
        },1000)
    },[url, typeUrl])

    return [data, loading]
}
