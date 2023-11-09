import React, { useState, useEffect } from 'react';

const Dashbroad: React.FC = () => {
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        setName(localStorage.getItem("name"));
    }, []);

    return (
        <>
            <h1>Dashbroad</h1>
            <p>Hello {name}</p>
        </>
    );
};

export default Dashbroad;