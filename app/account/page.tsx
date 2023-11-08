"use client";
import { useState, useEffect } from 'react';

import useCheckLogin  from '../../utils/functions';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const AccountPage = () => {
    const [name, setName] = useState(null);

    const router = useRouter();

    useEffect(() => {
        const checkLogin = useCheckLogin();
        if (!checkLogin) {
            router.push('/login');
        }
        else {
            setName(localStorage.getItem("name"));
            router.push('/account');
        }
    }, [])

    return (
        <>
            <h1>Account</h1>
            <p>Logged in as { name }</p>
            <Link href="/logout">Logout</Link>
        </>
    );
}

export default AccountPage;