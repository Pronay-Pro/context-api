import React from 'react';

const Header = (props) => {
    const count = props.count
    return (
        <div>
            <h1>This is a Header :{count}</h1>
            <button onClick={()=>props.setCount(count+1)}>Click me</button>
        </div>
    );
};

export default Header;