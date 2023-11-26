"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'

import useCheckLogin  from '../../utils/functions';
import Login from './login';
import Loading from '@/components/Loading';
import Register from './register';
import ForgetPass from './forget-pass';
import AccountNav from './nav';

import './style.css';

interface AccountLayoutProps {
    children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [whatAction, setWhatAction] = useState<string>('login');

    const pathname = usePathname();

    useEffect(() => {
        const checkLogin = useCheckLogin();
        if (!checkLogin) {
            setIsLogin(false);
            setLoading(false);
        }
        else {
            setIsLogin(true);
            setLoading(false);
        }
    }, [pathname]);

    return (
        <div className="account-layout container">
            { loading && <Loading /> }
            {isLogin ? (
                <>
                    <div className="account-layout__body">
                        <div className="account-layout__nav">
                            <AccountNav currentPath={pathname} />
                        </div>
                        <div className="account-layout__content">
                            {children}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {whatAction === 'login' && (
                        <Login login={setIsLogin} action={setWhatAction} />
                    )}
                    {whatAction === 'register' && (
                        <Register login={setIsLogin} action={setWhatAction} />
                    )}
                    {whatAction === 'forgot-pass' && (
                        <ForgetPass login={setIsLogin} action={setWhatAction} />
                    )}
                </>
            )}
        
        </div>
    );
};

export default AccountLayout;
