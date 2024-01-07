import axios from "axios";

export const BaseUrl= "https://localhost:44330/api/";

export const EndPoints = {   //controller names
    user:"Users",
    user_login : "Users/userControl",
    // teacher_login : "teacher/userControl",
    base:"base"
}

export const createAPIEndpoint = endpoint => {

    let url = BaseUrl + endpoint + "/";
    let url2 = BaseUrl + endpoint + "?id=";
   

    return {
        get1 : () => axios.get(url2),
        get: id => axios.get(url2 + id),
        post: newUser => axios.post(url, newUser),  
        put: updateUser => axios.put(url, updateUser ),
        delete: id=> axios.delete(url + id),
    }

    
}