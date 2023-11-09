"use client"
import React, { useState, useEffect } from 'react';
import GET_INFO from '../../api/api_user';
import createApolloClient from '../../ApolloClient';

const Demo = (): JSX.Element => {
    const client = createApolloClient();

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        client.query({
            query: GET_INFO.GET_INFO
        }).then(res => {
            setData(res.data);
        });
    }, []);

    return (
        <>  
           Demo api from site: {data && data.generalSettings.url}
        </>
    );
};

export default Demo;
