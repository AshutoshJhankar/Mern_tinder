import axios from 'axios';


const instance=axios.create({
    baseURL: 'https://my-tinder-backen.herokuapp.com/',
});
export default instance; 