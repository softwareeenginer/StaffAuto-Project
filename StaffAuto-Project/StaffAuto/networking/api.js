import Axios from "react-native-axios";

let API = Axios.create({
    baseURL: "http://localhost:4000/"
});

export default API;
