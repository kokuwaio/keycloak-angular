import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable()
export class BackendService {
    responseValue: string;
  constructor(private http: HttpClient) { 
      this.responseValue = ""
  }

    get getResponse() : string {
        return this.responseValue
    }

  requestBackend(token:string): void {
    console.log(token)
    var options = {  
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ token 
        },
      }
    fetch("http://backend.127.0.0.1.nip.io:8080/protected", options)
        .then(res =>  res.text())
        .then(text => this.responseValue = text)
  }
}