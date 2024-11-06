import axios from "axios"

class Api{
    constructor(){
        this.baseUrl = "https://quiz-app-sfo4.onrender.com/api/quizzes"
    }

    listAllQuiz(){
        return axios.get(`${this.baseUrl}/api/quizzes`)
    }
    listQuizById(id){
        return axios.get(`${this.baseUrl}/api/quizzes/${id}`)
    }
    submitQuiz(data){
        return axios.post(`${this.baseUrl}/api/submit`, data)
    }
}

const api = new Api()
export default api
