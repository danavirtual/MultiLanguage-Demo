import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component, Input, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import { Router } from "@angular/router";
import messages from "../../../assets/i18n/messages.json";

interface Messages {
  [key: string]: string;
  }


const typedMessages: Messages = messages;


@Component({
  selector: 'app-detailform',
  imports: [FormsModule],
  templateUrl: './detailform.component.html',
  styleUrl: './detailform.component.css'
})
export class DetailformComponent implements OnInit {
  lngSelected!: string; // used by CSS to hide/show Submit button
  label_Next!: string; // label on the screen
  label_btnNext!: string; // label on the screen
  label_btnExit!: string; // label on the screen

  selectedOption!: string;
  selectedOption2!: string;

  lngEnglishSelected = false;
  lngFrenchSelected = false;
  lngSpanishSelected = false;

  msgId: string = '';

  msg_yes: string = '';
  msg_no: string = '';
  msg_btn_next: string = '';
  msg_btn_exit: string = '';

  lbl_first: string = '';
  lbl_middle: string = '';
  lbl_last: string = '';
  label_appear_as: string = '';
  label_full_birthname: string = '';
  label_ever_had: string = '';


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
  onLanguageChangeRenderMessages = (lng: string) => {
    var lng = this.getTargetLngFromSvc();
    this.msg_yes = typedMessages["msg_yes_" + lng];

    this.msg_no = typedMessages["msg_no_" + lng];
    this.msg_btn_next = typedMessages["msg_btn_next_" + lng];
    this.msg_btn_exit = typedMessages["msg_btn_exit_" + lng];
    
    this.lbl_first = typedMessages["lbl_first_" + lng];
    this.lbl_middle = typedMessages["lbl_middle_" + lng];
    this.lbl_last = typedMessages["lbl_last_" + lng];

    this.label_appear_as = typedMessages["label_appear_as_" + lng];
    this.label_ever_had = typedMessages["label_ever_had_" + lng];
    this.label_full_birthname = typedMessages["label_full_birthname_" + lng];

  };


  constructor(
    private router: Router,
    private dataSharingService: DataSharingService) {
    //
  }
  ngOnInit(): void {
    var lng = this.getTargetLngFromSvc();
    this.msg_yes = typedMessages["msg_yes_" + lng];
    this.msg_no = typedMessages["msg_no_" + lng];
    
    this.lbl_first = typedMessages["lbl_first_" + lng];
    this.lbl_middle = typedMessages["lbl_middle_" + lng];
    this.lbl_last = typedMessages["lbl_last_" + lng];

    this.msg_btn_next = typedMessages["msg_btn_next_" + lng];
    this.msg_btn_exit = typedMessages["msg_btn_exit_" + lng];

    this.lbl_first = typedMessages["lbl_first_" + lng];
    this.lbl_middle = typedMessages["lbl_middle_" + lng];
    this.lbl_last = typedMessages["lbl_last_" + lng];
    
    this.label_appear_as = typedMessages["label_appear_as_" + lng];
    this.label_ever_had = typedMessages["label_ever_had_" + lng];
    this.label_full_birthname = typedMessages["label_full_birthname_" + lng];

  }
  onExit() {
    var lng = this.getTargetLngFromSvc();
    var url = "/";
      console.log("AgeverificationComponent: exit to: " + url);
      this.router.navigate([url]);
  }

  onSubmit(value: any) {
    console.log("DetailformComponent: Form Values: "
      + " value.first : "  + value.first
      + ", value.middle : " + value.middle
      + ", value.last : " + value.last
      + ", value.selectedOption :" + value.selectedOption
      + ", value.selectedOption :" + value.selectedOption2
    );
    // send value.yes or value.no to dataSharingService

    this.dataSharingService.setAgeVerificationResponse(value.selectedOption);
    var lng = this.getTargetLngFromSvc();
    var url = "/exitpage/" + lng;
    if (value.selectedOption === "Yes") {
      console.log("DetailformComponent: navigate to: " + url);
      this.router.navigate([url]);
    } else {
      console.log("DetailformComponent: negative navigate to: " + url);
      url = "/exitpage/" + lng;
      this.router.navigate([url]);
    }

  }
}
