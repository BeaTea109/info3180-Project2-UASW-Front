import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://info3180-project-2-backend.herokuapp.comapi/users/';

class UserService {

  getUserBoard(user_id) {
    return axios.get(API_URL + user_id, { headers: authHeader() });
  }

}

export default new UserService();
