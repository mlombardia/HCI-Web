import { Api } from './api.js'

export { RoutinesApi };

class RoutinesApi {

    static get url(){
        return `${Api.baseUrl}/routines`;
    }

    static get currentUserRoutinesurl(){
        return `${Api.baseUrl}/user/current/routines/`;
    }

    static async add(data, controller){
        return await Api.post(RoutinesApi.url, true, data, controller);
    }
    
    static async getRoutines(controller){
        return await Api.get(RoutinesApi.currentUserRoutinesurl, true, controller);
    }

    static async getCurrentUserRoutines(controller){
        return await Api.get(RoutinesApi.currentUserRoutinesurl, true, controller);
    }

    static async getRoutine(id, controller){
        return await Api.get(`${RoutinesApi.url}/${id}`, true, controller);
    }

    static async getCycles(id, controller){
        return await Api.get(`${RoutinesApi.url}/${id}/cycles`,true,controller);
    }

    static async updateRoutine(id, routine, controller){
        return await Api.put(`${RoutinesApi.url}/${id}`, true, routine, controller);
    }

    static async deleteRoutine(id, controller){
        return await Api.delete(`${RoutinesApi.url}/${id}`, true, controller);
    }
}