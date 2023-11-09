import Link from "next/link";

interface AccountNavProps {
    currentPath: string;
}

const AccountNav: React.FC<AccountNavProps> = ({ currentPath }) => {
    
    return (
        <div className="nav">
            <Link className={currentPath === '/account/dashbroad' || currentPath === '/account' ? 'active' : ''} href="/account/dashbroad">Dashboard</Link>
            <Link className={currentPath === '/account/orders' ? 'active' : ''} href="/account/orders">Orders</Link>
            <Link className={currentPath === '/account/profile' ? 'active' : ''}href="/account/profile">Profile</Link>
            <Link className={currentPath === '/account/address' ? 'active' : ''}href="/account/address">Address</Link>
            <Link className={currentPath === '/account/payment' ? 'active' : ''}href="/account/payment">Payment</Link>
            <Link className={currentPath === '/account/logout' ? 'active' : ''}href="/account/logout">Logout</Link>
        </div>
    );
};

export default AccountNav;