import { useEffect, useState } from 'react';

const Box = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                let res = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!res.ok) {
                    throw new Error("Failed fetch");
                }

                let data = await res.json();
                setUsers(data);
            }
            catch (e) {
                console.error(e.massage);
            }
        }

        getUsers()
    }, [])

    useEffect(() => {
        const handleClick = () => { console.log('click') };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <ul className='box'>
            {users.length > 0 &&
                users.map((user) => <li key={user.id}>{user.username}</li>)}
        </ul>
    );
};

export default Box;