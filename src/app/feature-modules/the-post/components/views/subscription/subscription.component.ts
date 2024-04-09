import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@core/api/api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'md-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private apiService: ApiService
  ){}

  subscriptionForm: any;
  hasSubscribed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  hasError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isSubscribing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.subscriptionForm = new FormGroup({
      'email': new FormControl('', [ Validators.required, Validators.email ]),
    });
  }

  subscribe(){
    if(!(this.subscriptionForm.invalid)){
      let email = this.subscriptionForm.get('email').value;

      let subscriber = {
        email: email,
        status: 'confirmed',
        lists: [1]
      }

      this.isSubscribing.next(true);
      this.apiService.subscribe(subscriber).subscribe((response: any) => {
        if(response.id){
          this.hasSubscribed.next(true);
        }else{
          this.hasError.next(true);
        }

        if(isPlatformBrowser(this.platformId)){
          setTimeout(() => {
            this.hasSubscribed.next(false);
            this.hasError.next(false);
          }, 4000);
        }

        this.isSubscribing.next(false);
        this.subscriptionForm.reset();
      });
    }
  }

}
