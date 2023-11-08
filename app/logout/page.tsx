"use client";
import { useRouter } from 'next/navigation';
import useCheckLogin  from '../../utils/functions';

const LogoutPage = () => {
    const checkLogin = useCheckLogin();

    const router = useRouter();
    
    if (checkLogin) {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
    }

    router.push('/login');
    
    return <div>Logging out...</div>;
};

export default LogoutPage;