import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import data from './data.json';

export default function App() {
    const [code, setCode] = useState(`function Test () { return "hello"}`);
    const [dataInfo, setDataInfo] = useState(data);
    const [state, setState] = useState(null);
    return (
        <div>
            {dataInfo &&
                dataInfo.countries.map((item) => {
                    return (
                        <div>
                            <h3>Country name:</h3>
                            <div>
                                <select>
                                    {dataInfo.countries.map((ct) => (
                                        <option value={ct.name}>{ct.name}</option>
                                    ))}
                                </select>
                            </div>
                            {/* {setState(item.name)} */}
                            <h3>
                                State name:
                                {item.states.map((state) => {
                                    return (
                                        <div>
                                            <h5>{state.name}</h5>
                                            <select>
                                                {item.states.map((state) => {
                                                    return (
                                                        <option value={state.name} name="state">
                                                            {state.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                            <h3>
                                                City name:{' '}
                                                {state.cities.map((city) => {
                                                    <div>
                                                        {/* <h5>{city}</h5> */}
                                                        <select>
                                                            {state.cities.map((city) => {
                                                                return (
                                                                    <option value={city.name} name="name">
                                                                        {city.name}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    </div>;
                                                })}
                                            </h3>
                                        </div>
                                    );
                                })}
                            </h3>
                        </div>
                    );
                })}
        </div>
    );
}
