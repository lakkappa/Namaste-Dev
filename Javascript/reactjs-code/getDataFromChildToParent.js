// Parent Component
import React, { useState } from 'react';
import Child from './Child';

export function App() {
    const [data, setData] = useState('');

    const getData = (childData) => {
        setData(childData);
    };
    return (
        <div>
            <Child sendDataToParent={getData} />
            <h2>Getting Data from Child: {data}</h2>
        </div>
    );
}


// Child Component

import React, { useState } from 'react';

const Child = (props) => {
    const [name, setName] = useState('Hello');

    const handleName = () => {
        props.sendDataToParent(name);
    };

    return (
        <div>
            Child Component
            <button onClick={handleName}>sendDataToParent</button>
        </div>
    );
};
export default Child;

