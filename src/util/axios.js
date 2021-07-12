import axios from "axios";

const DOMAIN = "http://localhost:5000/auth";
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
const headers = {
    'Content-type':'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept':'*/*'
}



export const request = (method, url, data) => {
    return axios({
    method,
    url: DOMAIN + url,
    data,
    headers: {"Access-Control-Allow-Origin": "*"}
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};