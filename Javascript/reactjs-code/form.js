export default function App() {
    const [code, setCode] = useState(`function Test () { return "hello"}`);
    const [text, setText] = useState('');
    const [data, setData] = useState('');

    const changeText = (e) => {
        setText(e.target.value);
    };

    const clickButton = (e) => {
        let results = text.split(' ');
        let word = ' ';
        for (let i = 0; i < results.length; i++) {
            word += results[i].charAt(0).toUpperCase() + results[i].slice(1) + ' ';
        }
        setData(word);
        e.preventDefault();
    };
    return (
        <div>
            <Editor
                value={code}
                onValueChange={(value) => setCode(value)}
                highlight={(code) => highlight(code, languages.js)}
                padding={20}
                placeholder={'WRITE YOUR CSS HERE'}
            />
            <div>
                <form onSubmit={(e) => clickButton(e)}>
                    <input type="text" onChange={(e) => changeText(e)} value={text} />
                    <button type="submit">Click here</button>
                    <br />
                    <br />
                    <br />
                    <br />
                </form>
                <div>{data}</div>
            </div>
        </div>
    );
}