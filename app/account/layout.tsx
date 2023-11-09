"use client";
import { useState, useEffect } from 'react';

import useCheckLogin  from '../../utils/functions';
import AccountNav from './nav';
import Login from './login';
import Loading from '@/components/Loading';
import Register from './register';
import ForgetPass from './forget-pass';

const AccountLayout = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [whatAction, setWhatAction] = useState('login');

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
    }, []);

    const login = (arg) => {
        setIsLogin(arg);
    }

    const action = (arg) => {
        setWhatAction(arg);
    }

    return (
        <div className="account-layout container">
            { loading && <Loading /> }
            {isLogin ? (
                <>
                    <div className="account-layout__nav">
                        <AccountNav />
                    </div>
                    <div className="account-layout__content">
                        {children}
                    </div>
                </>
            ) : (
                <>
                    {whatAction === 'login' && (
                        <Login login={login} action={setWhatAction} />
                    )}
                    {whatAction === 'register' && (
                        <Register login={login} action={setWhatAction} />
                    )}
                    {whatAction === 'forgot-pass' && (
                        <ForgetPass login={login} action={setWhatAction} />
                    )}
                </>
            )}
        
        </div>
    );
};

export default AccountLayout;

