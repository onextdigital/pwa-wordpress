"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Dashbroad: React.FC = () => {
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        setName(localStorage.getItem("name"));
    }, []);

    return (
        <>
            <p>Welcome back, { name }</p>
            <p>Not { name }, <Link href="/account/logout">logout</Link></p>
        </>
    );
};

export default Dashbroad;