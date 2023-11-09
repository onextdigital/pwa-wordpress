import { useState, useEffect } from 'react';

const Dashbroad = () => {
    const [name, setName] = useState(null);

    useEffect(() => {
        setName(localStorage.getItem("name"));
    }, []);

    return (
        <>
            <h1>Dashbroad</h1>
            <p>Hello { name }</p>
        </>
    );
};

export default Dashbroad;