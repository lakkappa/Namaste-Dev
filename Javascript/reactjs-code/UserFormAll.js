import React, { useState } from 'react';

const App = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        salary: '',
    });
    const [result, setResult] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const eventHandler = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedRes = [...result];
            updatedRes[editIndex] = user;
            setResult(updatedRes);
            setEditIndex(null);
        } else {
            setResult((prev) => {
                return [...prev, user];
            });
        }
        setUser({ name: '', age: '', salary: '' });
    };

    const deleteItem = (i) => {
        const res = result.filter((item, index) => {
            return i !== index;
        });
        setResult(res);
    };

    const editItem = (i) => {
        setUser(result[i]);
        setEditIndex(i);
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={(e) => {
                        eventHandler(e);
                    }}
                />
                <br />
                <br />
                <label>Age: </label>
                <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={(e) => {
                        eventHandler(e);
                    }}
                />
                <br />
                <br />
                <label>Salary: </label>
                <input
                    type="number"
                    name="salary"
                    value={user.salary}
                    onChange={(e) => {
                        eventHandler(e);
                    }}
                />
                <br />
                <br />
                <button>submit</button>
            </form>
            <div>
                User Information:
                {result && (
                    <table style={{ border: '1px solid black' }}>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        {result &&
                            result.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <p>{item.name}</p>
                                        </td>
                                        <td>
                                            <p>{item.age}</p>
                                        </td>
                                        <td>
                                            <p>{item.salary}</p>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteItem(index)}>Delete</button>
                                            <button onClick={() => editItem(index)}>Edit</button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </table>
                )}
            </div>
        </div>
    );
};
export default App;
