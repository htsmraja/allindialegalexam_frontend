import axios from "axios";
const instance = axios.create({
    // baseURL: "http://localhost:5040/",
    //  baseURL: "https://allindialegalexam.com/",
    baseURL: "https://747eccd53bee.ngrok-free.app/",

});

export default instance;
