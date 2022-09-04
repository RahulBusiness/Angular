import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * User Login API
   */
   async login(request: any, role: any): Promise<any> {
    return this.http
      .post(environment.apiUrl + '/'+ role + '/login', request)
      .toPromise()
      .then((response: any) => {
        response['flag'] = (response['status'] === 200);
        return response;
      })
      .catch((error) => {
        console.log(error.error.message);
      });
  }
}
