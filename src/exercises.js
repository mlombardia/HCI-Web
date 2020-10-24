import { Api } from './api.js'

export { ExercisesApi, Exercise, Exercises, FullExercise };

class ExercisesApi {
    static get url(){
        return `${Api.baseUrl}/routines`; //para la rut 1 cicl 1 es `${Api.baseUrl}/routines/1/cycles/1/exercises`;
    }

    static async add(routineId, cycleId,name, detail, type, duration, repetitions, controller){
        return await Api.post(`${ExercisesApi.url}/${routineId}/cycles/${cycleId}/exercises`, true, new Exercise(name, detail, type, duration, repetitions), controller); //ExercisesApi.add(["Jumping Jacks", "Jumping Jacks", "exercise", 30, 0])
    }
    
    static async getExercises(routineId, cycleId,controller){
        return Api.get(`${ExercisesApi.url}/${routineId}/cycles/${cycleId}/exercises?page=0&size=9999`, true, controller);
    }

    static async updateExercise(routineId, cycleId, id, data, controller){
        return await Api.put(`${ExercisesApi.url}/${routineId}/cycles/${cycleId}/exercises/${id}`, true, data, controller);
    }

    static async getExercise(routineId, cycleId, id, controller){
        return Api.get(`${ExercisesApi.url}/${routineId}/cycles/${cycleId}/exercises/${id}`, true, controller);
    }

    static async deleteExercise(routineId, cycleId, id, controller){
        return await Api.delete(`${ExercisesApi.url}/${routineId}/cycles/${cycleId}/exercises/${id}`, true, controller);
    }

    static async addExerciseWithId(routineId, cycleId, data, controller){
        return Api.get(`${Api.baseUrl}/routines/${routineId}/cycles/${cycleId}/exercises`, data, controller);
    }
}

class Exercises {
    constructor(totalCount, orderBy, direction, results, size, page, isLastPage){
        this.totalCount = totalCount;
        this.orderBy = orderBy;
        this.direction = direction;
        this.results = results;
        this.size = size;
        this.page = page;
        this.isLastPage = isLastPage;
    }
}

class FullExercise {
    constructor(id, name, detail, type, duration, repetitions, order){
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.type = type;
        this.duration = duration;
        this.repetitions = repetitions;
        this.order = order;
    }
}

class Exercise {
    constructor(name, detail, type, duration, repetitions){
        this.name=name;
        this.detail=detail;
        this.type=type;
        this.duration=duration;
        this.repetitions=repetitions;
    }
}