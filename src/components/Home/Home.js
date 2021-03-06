import React from 'react';

const Home = (props) => {
    const count = props.count;
    return (
        <div>
            <h2>Kuddus ali :{count}</h2>
        </div>
    );
};

export default Home;