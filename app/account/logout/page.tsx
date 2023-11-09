"use client";
import { redirect } from 'next/navigation'

const LogoutPage: React.FC = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    
    redirect('/account');

    return <div>Logging out...</div>;
};

export default LogoutPage;