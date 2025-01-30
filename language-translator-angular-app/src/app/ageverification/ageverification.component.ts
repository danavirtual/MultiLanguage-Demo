import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from "@angular/platform-browser";
import { Component, Input, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import { Router } from "@angular/router";
import messages from "../../../assets/i18n/messages.json";

interface Messages {
  [key: string]: string;
}

const typedMessages: Messages = messages;

@Component({
  selector: 'app-ageverification',
  imports: [ FormsModule],
  templateUrl: './ageverification.component.html',
  styleUrl: './ageverification.component.css'
})
export class AgeverificationComponent implements OnInit {
  lngSelected!: string; // used by CSS to hide/show Submit button
  label_Next!: string; // label on the screen
  label_btnNext!: string; // label on the screen
  label_btnExit!: string; // label on the screen

  selectedOption!: string;

  lngEnglishSelected = false;
  lngFrenchSelected = false;
  lngSpanishSelected = false;
  
  
  msgId: string = '';
  msg_age_verification_h2: string = '';
  msg_yes: string = '';
  msg_no: string = '';
  msg_btn_next: string = ''; 
  msg_btn_exit: string = ''; 

  lbl_first: string = '';
  lbl_middle: string = '';
  lbl_last: string = '';

  
  getTargetLngFromSvc() {
    var result = '';
    this.dataSharingService.targetLanguage.subscribe(
      (value: string) => {
        console.log("AgeverificationComponent: Data-Sharing-Svc returned target language: ", value);
        result = value;
      }
    );
    return result;
  }
  getAgeVerificationResponseFromSvc() {
    var result = '';
    this.dataSharingService.targetAge18Plus.subscribe(
      (value: string) => {
        console.log("AgeverificationComponent: Data-Sharing-Svc returned targetAge18Plus: ", value);
        result = value;
      }
    );
    return result;
  }

  onLanguageChangeRenderMessages = (lng: string) => {
    var lng = this.getTargetLngFromSvc();
    this.msgId = "msg_age_verification_h2_" + lng;
    this.msg_age_verification_h2 = typedMessages[this.msgId]; 
    this.msg_yes = typedMessages["msg_yes_" + lng];
    this.msg_no = typedMessages["msg_no_" + lng];
    this.msg_btn_next = typedMessages["msg_btn_next_" + lng];
    this.msg_btn_exit = typedMessages["msg_btn_exit_" + lng]; 
    this.lbl_first = typedMessages["lbl_first_" + lng];
    this.lbl_middle = typedMessages["lbl_middle_" + lng];
    this.lbl_last = typedMessages["lbl_last_" + lng];
  };

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService) {
    //
  }
  ngOnInit(): void {
    var lng = this.getTargetLngFromSvc();
    this.msgId = "msg_age_verification_h2_" + lng;
    this.msg_age_verification_h2 = typedMessages[this.msgId]; 
    this.msg_yes = typedMessages["msg_yes_" + lng];
    this.msg_no = typedMessages["msg_no_" + lng];
    console.log("AgeverificationComponent: ngOnInit: msg_yes_" + lng + ':' + this.msg_yes);
    this.msg_btn_next = typedMessages["msg_btn_next_" + lng];
    console.log("AgeverificationComponent: ngOnInit: msg_btn_next_" + lng + ':' + this.msg_btn_next);
    this.msg_btn_exit = typedMessages["msg_btn_exit_" + lng]; 
    this.lbl_first = typedMessages["lbl_first_" + lng];
    this.lbl_middle = typedMessages["lbl_middle_" + lng];
    this.lbl_last = typedMessages["lbl_last_" + lng];
  }
  onExit() {
    var lng = this.getTargetLngFromSvc();
    var url = "/";
      console.log("AgeverificationComponent: exit to: " + url);
      this.router.navigate([url]);
  }
  onSubmit(value: any) {
    console.log("AgeverificationComponent: Form Values: "
      + " value.selectedOption : " + value.selectedOption
      + " value.first : "  + value.first
      + ", value.middle : " + value.middle
      + ", value.last : " + value.last 
      + ", value.email :" + value.email);
      
    // send value.yes or value.no to dataSharingService

    this.dataSharingService.setAgeVerificationResponse(value.selectedOption);
    var lng = this.getTargetLngFromSvc();
    var url = "/detailform/" + lng;
    if (value.selectedOption === "Yes") {
      console.log("AgeverificationComponent: navigate to: " + url);
      this.router.navigate([url]);
    } else {
      console.log("AgeverificationComponent: negative navigate to: " + url);
      url = "/exitpage/" + lng;
      this.router.navigate([url]);
    }
  }
  
  }
