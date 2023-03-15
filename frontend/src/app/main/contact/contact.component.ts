import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SubscriptionService } from '../../services/subscription.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // get view child
  @ViewChild('successModal') successModal!: NgbModalRef;

  // define form group
  subscriptionForm!: FormGroup;

  // constructor
  constructor(
    private subscriptionService: SubscriptionService, 
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    private modalService: NgbModal
  ) { }

  // ngOnInit
  ngOnInit(): void {
    this.subscriptionForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  // submit subscription
  onSubmit() {
    // check if form is valid
    if (this.subscriptionForm.valid) {
      this.subscriptionService.createSubscription(this.subscriptionForm.value)
        .subscribe({
          next: (subscription) => {
            console.log('Subscription created successfully!');
          },
          error: (err) => {
            console.error(err);
          }
        });
    }

    // redirect to home page
    // this.router.navigate(['/']);

    // call open success modal
    this.openSuccessModal();

    // reset form
    this.subscriptionForm.reset();
  }

  // open success modal
  openSuccessModal() {
    this.modalService.open(this.successModal, { centered: true });
  }

  // hide error message
  hideErrorMsg() {
    this.renderer.addClass(this.el.nativeElement.querySelector('alert-danger'), 'd-none');
  }
}
