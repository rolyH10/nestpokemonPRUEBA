import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HttpAdapter {
    //esto sera si cambia axios solo cambio esta clase    

    private axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        try{
            const { data } = await this.axios.get<T>(url);
            return data;

        }catch(error){
            throw new Error('This is an error - Check logs');
        }
    }


}