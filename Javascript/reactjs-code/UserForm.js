export default function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        setUserInfo({ name, age, salary });
    };

    return (
        <div>
            User Form Details:
            <br />
            <br />
            <form onSubmit={submitForm}>
                <label>Name : </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <label>Age : </label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <br />
                <label>Salary : </label>
                <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <br />
                <br />
                <br />
                <button type="submit">Submit Form</button>
            </form>
            <br />
            <div>
                Displaying the User Info:
                {userInfo && (
                    <div>
                        <h2>{userInfo.name}</h2>
                        <h2>{userInfo.age}</h2>
                        <h2>{userInfo.salary}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}