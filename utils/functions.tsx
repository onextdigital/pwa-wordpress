export default function checkLogin() {
    return localStorage.getItem("token") ? true : false;
}