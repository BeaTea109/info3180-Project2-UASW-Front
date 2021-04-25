import authHeader from "./auth-header";
import axios from 'axios';
const API_URL = "https://info3180-project-2-backend.herokuapp.com/api/";

class CarService {

  getCars() {
    return axios.get(API_URL + "cars", { headers: authHeader() });
  }

  saveCar(car, user_id) {
    console.log("not working")
    const fd = new FormData();
    fd.append("user_id", user_id);
    fd.append("make", car.make);
    fd.append("model", car.model);
    fd.append("colour", car.colour);
    fd.append("year", car.year);
    fd.append("transmission", car.transmission);
    fd.append("car_type", car.type);
    fd.append("price", car.price);
    fd.append("photo", car.photo);
    fd.append("description", car.description);

    return axios.post(API_URL + "cars", fd, { headers: authHeader() });
  }

  getCarByID(car_id) {
    return axios.get(API_URL + `cars/${car_id}`, { headers: authHeader() });
  }

  getUserFavouriteCars(user_id) {
    return axios.get(API_URL + `users/${user_id}/favourites`, {
      headers: authHeader()
    });
  }

  addFavourite(car_id){
    return axios.post(API_URL + `cars/${car_id}/favourite`, {}, {
      headers: authHeader()
    });
  }
}

export default new CarService();
