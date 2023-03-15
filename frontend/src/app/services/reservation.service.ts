import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  // URL to web api
  private reservationUrl = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient) { }

  // create a reservation
  createReservation(reservation: any) {
    return this.http.post(this.reservationUrl, reservation);
  }

  // get all reservations
  getReservations() {
    return this.http.get(this.reservationUrl);
  }

  // get a reservation by id
  getReservation(id: string) {
    return this.http.get(`${this.reservationUrl}/${id}`);
  }

  // update a reservation
  updateReservation(id: string, reservation: any) {
    return this.http.put(`${this.reservationUrl}/${id}`, reservation);
  }

  // delete a reservation
  deleteReservation(id: string) {
    return this.http.delete(`${this.reservationUrl}/${id}`);
  }
}
