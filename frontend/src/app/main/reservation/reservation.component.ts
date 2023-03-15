import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ReservationService } from '../../services/reservation.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {
  // get success modal
  @ViewChild('successModal') successModal!: NgbModalRef;
  
  // define form controls
  reservationForm!: FormGroup;

  // constructor
  constructor(
    private reservationService: ReservationService, 
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    private modalService: NgbModal
  ) { }

  // ngOnInit
  ngOnInit(): void {
    this.reservationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      pax: new FormControl('', Validators.required)
    });
  }

  // submit reservation
  onSubmit() {
    // check if form is valid
    if (this.reservationForm.valid) {
      this.reservationService.createReservation(this.reservationForm.value)
        .subscribe({
          next: (reservation) => {
            console.log('Reservation created successfully!');
          },
          error: (err) => {
            console.error(err);
          }
        });
    }

    // redirect to home page
    // this.router.navigate(['/']);

    // open success modal
    this.openSuccessModal();

    // reset form
    this.reservationForm.reset();
  }

  // open modal
  openSuccessModal() {
    this.modalService.open(this.successModal, { centered: true });
  }

  // add hide class to error message
  hideErrorMsg() {
    this.renderer.addClass(this.el.nativeElement.querySelector('alert-danger'), 'd-none');
  }
}
