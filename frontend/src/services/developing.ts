import axios from "axios";
import developingModel from "../models/developing/Developing"

class Developing {

    // if a class has only methods, it means it doesn't have data
    // a class without data is called a stateless class
    // a class with data is called a stateful class
    async getAllDevelopings(): Promise<developingModel[]> {
        const response = await axios.get<developingModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/developings`)
        return response.data
    }
}

const developing = new Developing()
export default developing;