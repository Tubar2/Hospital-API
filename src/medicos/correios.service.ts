import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { map, Observable } from "rxjs";


@Injectable()
export class CorreiosService {
    constructor(private httpService: HttpService) {}
    
    getDados(cep: string): Observable<AxiosResponse<any>> {
        return this.httpService.get('https://viacep.com.br/ws/'+cep+'/json/').pipe(
            map(response => response.data),
        );
    }
}
