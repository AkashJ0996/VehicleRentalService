import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../auth/services/storage/storage.service';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  getAllCar() : Observable<any>{
    return this.http.get(BASIC_URL+"/api/customer/cars" ,{
      headers : this.createAuthorizationHeader()
    } );
  }

  getCarById(id:number) : Observable<any>{
    return this.http.get(BASIC_URL+"/api/customer/car/"+id ,{
      headers : this.createAuthorizationHeader()
    } );
  }

  bookACar(bookACarDto : any ) : Observable<any>{
    console.log(bookACarDto)
    return this.http.post(BASIC_URL+"/api/customer/car/book" , bookACarDto ,{
      headers : this.createAuthorizationHeader()
    } );
  }

  getBookingsByUserId() : Observable<any>{
    return this.http.get(BASIC_URL+"/api/customer/car/bookings/"+ StorageService.getUserId() ,{
      headers : this.createAuthorizationHeader()
    } );
  }

  searchCar(searchCarDto : any) : Observable<any>{
    return this.http.post(BASIC_URL+"/api/customer/car/search" , searchCarDto , {
       headers : this.createAuthorizationHeader()
    });
   }


  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      'Authorization' ,'Bearer ' + StorageService.getToken()
    )
}


}