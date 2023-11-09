"use client";

import { useRouter } from 'next/navigation';
import useCheckLogin  from '../../../utils/functions';

const LogoutPage = () => {

    const router = useRouter();
    
    
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    

    // router.push('/account');
    window.location.href = '/account';
    
    return <div>Logging out...</div>;
};

export default LogoutPage;