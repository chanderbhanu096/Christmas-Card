import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FirstPage() {
    const [name, setName] = useState('');
    const [button, setButton] = useState(false);
    console.log(name)
    console.log("length", name.length)

    const handleChange = (e) => {
        e.preventDefault();
        setName({...name, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        if (name.length != 0) {
            setButton(true);
        } else {
            setButton(false);
        }
    }, [name]);

    return (
        <div className="first-page">
            <form>
                <input type="text" name="name" placeholder="Enter your name" onChange={handleChange}></input>
                {button ? <button><Link to={{ pathname: '/card', state: name }}>Open Your Card...</Link></button> : <div />}
            </form>
        </div>
    )
};

export default FirstPage;