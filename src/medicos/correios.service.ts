import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";
import { map, Observable } from "rxjs";

export class Data {

    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

@Injectable()
export class CorreiosService {
    async getDados(cep: string) {
        const res = await axios.get<Data>('https://viacep.com.br/ws/' + cep + '/json/')
        return res.data;
    }
}
