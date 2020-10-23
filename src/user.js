import { Api } from './api.js';

export { UserApi, Credentials };

class UserApi {
    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async login(user, password) {
        const result = await Api.post(`${UserApi.url}/login`, false, new Credentials(user, password), true);
        Api.token = result.token;
        return result.token;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, controller);
        Api.token = undefined;
    }

    static async signup(credentials, controller) {
        const result = await Api.post(`${UserApi.url}`, false, credentials, controller);
        Api.token = undefined;
        return result;
    }
    
    static async modify(user, password, fullname, email) {
        return await Api.put(`${UserApi.url}/current`, true, new InfoProfile(user, password, fullname, email), true);
      }

    static async get() {
        return await Api.get(`${UserApi.url}/cuurent`,true,  true);
    }

    static async getuser(id, controller){
        return await Api.get(`${UserApi.url}/${id}`, true, controller);
    }

    static async getUserRoutines(controller){
        return await Api.get(`${UserApi.url}/current/routines/`, true, controller);
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class InfoProfile {
    constructor(user, password, fullname, email){
        this.user = user;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.birthday = 1;
        this.gender = "other";
    }
}