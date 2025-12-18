import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:5040/",
    //  baseURL: "https://allindialegalexam.com/",

});

export default instance;
