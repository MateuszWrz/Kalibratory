import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Kalibratory } from "../models/kalibratory";


@Injectable({
    providedIn:'root'
})
export class CzyszczenieService implements OnInit{
    constructor(private http:HttpClient){

    }

    ngOnInit(){    
    }
 

    getData():Observable<Kalibratory[]>{
       return this.http.get<Kalibratory[]>(
            environment.baseURL + 'KalibratoryNaglowek');
    }
}
