import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root",
})
export class ApiCoreService {


  constructor(private http: HttpClient) { }

  listUserApi(): Observable<any> {
    return this.http.get(`https://api7.cloudframework.io/recruitment/fullstack/users?id=1`,
    {

      headers: {
        "X-WEB-KEY": "Development"
      },

    });
  }

  updateUserApi(data): Observable<any> {
    const rawdata = data[0];
    console.log(rawdata);
    return this.http.post(`https://api7.cloudframework.io/recruitment/fullstack/users/${rawdata.id}`,
    {
      id: rawdata.id,
      name: rawdata.name,
      surname: rawdata.surname,
      email: rawdata.email,
      phone: rawdata.phone,
      age: rawdata.age,
      loan_amount: rawdata.loan_amount,
      loan_weeks: rawdata.loan_weeks,
      loan_date: "2022-05-20",
      check: rawdata.check
    },
    {
      headers: {
        "X-WEB-KEY": "Development"
      },
    });
  }

}
