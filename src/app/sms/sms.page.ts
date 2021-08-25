import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {
  hash: any;
  msg: any;
  otpForm: FormGroup;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChildren('formRow') rows: any;
  constructor(private smsRetriever: SmsRetriever,private formBuilder: FormBuilder) {
    this.otpForm = this.formBuilder.group(
      {
      otp: this.formBuilder.array([]),
      });
   }
   get otp() {
    return this.otpForm.get('otp') as FormArray;
  }
   addOtpFields() {
    for(let i = 0;i<6;i++){
      this.otp.push(this.formBuilder.control([]));
    }
  }
  ngOnInit() {
    this.addOtpFields();
    console.log(this.otp);
  }
  get otpFormControls() { return this.otpForm.controls; }
  getHash(){
    this.smsRetriever.getAppHash()
  .then((res: any) => {console.log(res);
  this.hash = res;})
  .catch((error: any) => console.error(error));
  }
  startWatch(){
    this.smsRetriever.startWatching()
  .then((res: any) => {
    console.log(res);
    this.msg = res.Message;
    const matches = this.msg.match(/(\d+)/);
    if(matches){
      const d = matches[0].toString();
      console.log(d[0]);
      this.msg = d;
      for(let i = 0;i< this.msg;i++){
        this.otp.at(i).patchValue(this.msg[i]);
      }
    }
   })
  .catch((error: any) => {
    console.error(error);

  });
  }
  f(){
    console.log('ll');
    this.msg = '123456';
    for(let i = 0;i< this.msg;i++){
      this.otp.at(i).patchValue(this.msg[i]);
    }
  }
  keyUpEvent(event, index) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    }
    else{
      let pos = index;
      if (event.keyCode === 8 && event.which === 8 && event.target.value.length > 0) {
       pos = index - 1 ;
      } else {
        if(event.target.value.length > 0){
          pos = index + 1 ;
        }
      }
      if (pos > -1 && pos < this.otp.length && event.target.value.length > 0) {
       // eslint-disable-next-line no-underscore-dangle
       this.rows._results[pos].nativeElement.focus();
      }
     }
   }
}
