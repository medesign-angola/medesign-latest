import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'md-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class ContactUsIndexComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any){}

  iAmSingular: boolean = true;

  contactUsFormGroup: any;

  ngOnInit(): void {
    this.contactUsFormGroup = new FormGroup({
      'fullname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'subject': new FormControl('', [Validators.required]),
      'message': new FormControl('', [Validators.required])
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
    
  }
}
