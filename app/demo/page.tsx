"use client"
import { useState, useEffect } from 'react'
import GET_INFO from '../../api/api_user'
import createApolloClient from '../../ApolloClient';

const Demo = () => {
    
    const client = createApolloClient();

    const [data, setData] = useState(null)

    useEffect(() => {
        client.query({
            query: GET_INFO.GET_INFO
        }).then(res => {
            setData(res.data)
        })
    }, [])

    return (
        <>  
           Demo api from site: {data && data.generalSettings.url}
        </>
    )
}

export default Demo