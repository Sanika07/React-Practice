import axios from 'axios';

const url = 'http://localhost:3003/avengers';

const getUsers = async () => {
    return await axios.get(url);
}

export default getUsers;