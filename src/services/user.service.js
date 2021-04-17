import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://info3180-project-2-backend.herokuapp.com/api/';

class UserService {

  getUserBoard() {
    return axios.get(API_URL, { headers: authHeader() });
  }

}

export default new UserService();
