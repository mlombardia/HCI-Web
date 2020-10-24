import { Api } from './api.js'

export { CyclesApi };

class CyclesApi {
    static async add(id, data, controller){
        return await Api.post(`${Api.baseUrl}/routines/${id}/cycles`, true, data, controller);
    }

    static async getRoutineCycles(id, controller){
        return await Api.get(`${Api.baseUrl}/routines/${id}/cycles?page=0&size=99999&orderBy=id&direction=asc`, true, controller);
    }

    static async deleteCycle(RId, CId, controller){
        return await Api.delete(`${Api.baseUrl}/routines/${RId}/cycles/${CId}`, true, controller);
    }
}