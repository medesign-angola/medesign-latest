import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsResponseEnum } from '@core/Enums/contact-response.enum';
import { ApiService } from '@core/api/api.service';
import { ScrollerService } from '@shared/services/scroller/scroller.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'md-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class ContactUsIndexComponent implements OnInit {

  private scrollerService = inject(ScrollerService);
  private apiService = inject(ApiService);

  constructor(@Inject(PLATFORM_ID) private platformId: any){}

  iAmSingular: boolean = true;

  contactUsFormGroup: any;

  isSendingTheEmail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  hasSentTheEmail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showErrorMessage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showEmailSentMessage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {

    this.scrollerService.initialNavigation();

    this.contactUsFormGroup = new FormGroup({
      'fullname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'actuationArea': new FormControl('', []),
      'subject': new FormControl('', [Validators.required]),
      'message': new FormControl('', [Validators.required]),
    });
  }

  goback(){
    if(isPlatformBrowser(this.platformId)){
      window.history.back();
    }
  }

  iamSingularFunction(value: boolean){
    this.iAmSingular = value;
  }

  submit(){
    this.isSendingTheEmail.next(true);
    if(!this.contactUsFormGroup.invalid){

      let contactFormData = new FormData();
      contactFormData.append('name', this.contactUsFormGroup.get('fullname').value)
      contactFormData.append('email', this.contactUsFormGroup.get('email').value)
      contactFormData.append('subject', this.contactUsFormGroup.get('subject').value)
      contactFormData.append('message', this.contactUsFormGroup.get('message').value)

      this.apiService.contactUs(contactFormData).subscribe({
        next: (response) => {
          this.isSendingTheEmail.next(false);
          if(response.code === ContactUsResponseEnum.OK){
            this.contactUsFormGroup.reset();
            this.showEmailSentMessage.next(true);
            // setTimeout(() => {
            //   this.showEmailSentMessage.next(false);
            // }, 3000);
          }


          this.scrollerService.initialNavigation();

        },
        error: (error) => {
          console.log(error),
          this.showErrorMessage.next(true);
          setTimeout(() => {
            this.showErrorMessage.next(false);
          }, 3000);
          this.scrollerService.initialNavigation();
        },
      });
    }
  }

  // temporaryMessage(message: string, responseStatus: ContactUsResponseEnum, timeout: 3){
    
  // }
}
