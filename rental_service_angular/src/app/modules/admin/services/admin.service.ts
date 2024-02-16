import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient ) { }

  postCar(carDto : any) : Observable<any>{
    return this.http.post(BASIC_URL+"/api/admin/car" , carDto , {
      
      headers : this.createAuthorizationHeader()
    });
   
  }

  getAllCar() : Observable<any>{
    return this.http.get(BASIC_URL+"/api/admin/cars" ,{
      headers : this.createAuthorizationHeader()
    } );
  }

  deleteCar(id:number) : Observable<any>{
    return this.http.delete(BASIC_URL+"/api/admin/car/"+id ,{
      headers : this.createAuthorizationHeader()
    } );
  }

  getCarById(id:number) : Observable<any>{
    return this.http.get(BASIC_URL+"/api/admin/car/"+id ,{
      headers : this.createAuthorizationHeader()
    } );
  }

  updateCar(id:number ,carDto : any) : Observable<any>{
    return this.http.put(BASIC_URL+"/api/admin/car/"+id ,carDto,{
      headers : this.createAuthorizationHeader()
    } );
  }

  getBookings() : Observable<any>{
    return this.http.get(BASIC_URL+"/api/admin/car/bookings" ,{
      headers : this.createAuthorizationHeader()
    } );
  }

  changeBookingStatus(id:number , status : string) : Observable<any>{
    return this.http.get(BASIC_URL+`/api/admin/car/booking/${id}/${status}` ,{
      headers : this.createAuthorizationHeader()
    } );
  }

  searchCar(searchCarDto : any) : Observable<any>{
    return this.http.post(BASIC_URL+"/api/admin/car/search" , searchCarDto , {
       headers : this.createAuthorizationHeader()
    });
   }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      'Authorization' ,'Bearer ' + StorageService.getToken()
    )
}
 

}
