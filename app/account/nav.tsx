import Link from "next/link";

const AccountNav = (): JSX.Element => {
    return (
        <div className="nav">
            <Link href="/account">Dashboard</Link>
            <Link href="/account/orders">Orders</Link>
            <Link href="/account/profile">Profile</Link>
            <Link href="/account/address">Address</Link>
            <Link href="/account/payment">Payment</Link>
            <Link href="/account/logout">Logout</Link>
        </div>
    );
};

export default AccountNav;