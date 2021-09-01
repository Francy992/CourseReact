import axios from 'axios'

export default class LoginService{
    login(email, password, onSuccess, onError){
        axios.post("https://reqres.in/api/login", {email: email, password:password}).then(function(result){
            console.log(`Login effettuato con successo con token "${result.data}"`);
            onSuccess(result.data);
        }, function(error){
            console.error(`Login error con messaggio: "${error}"`);
            onError(error);
        });
    }
}