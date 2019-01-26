import { Injectable } from '@angular/core';
import { Response,Headers } from '@angular/http';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class HhtpCallsService {

//tempUrl = 'http://192.168.1.4:3000';
 tempUrl ='https://jokes-apart.herokuapp.com';

  constructor(private http:HttpClient) { }

  postJoke(data){
    console.log('posting',data,this.tempUrl+'/joke');
    return this.http.post(this.tempUrl+'/joke',data);
  }
  getJoke(){
    return this.http.get(this.tempUrl+'/joke');
  }
//change likes count
    putJoke(data){
    return this.http.put(this.tempUrl+'/joke',data);
  }

}
