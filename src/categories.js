import { Api } from './api.js'

export { CategoriesApi };

class CategoriesApi {

    static get url(){
        return `${Api.baseUrl}/categories`;
    }

    static async get(controller){
        return await Api.get(CategoriesApi.url, true, controller);
    }

    static async add(data, controller){
        return await Api.post(CategoriesApi.url, true, data, controller);
    }

    static async del(data, controller){
        return await Api.delete(`${CategoriesApi.url}/${data}`, true, controller);
    }
}