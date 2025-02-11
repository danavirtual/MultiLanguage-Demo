import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import { Router } from "@angular/router";
import * as messages from "../../../assets/i18n/messages.json";

@Component({
  selector: "app-language-select",
  imports: [CommonModule],
  templateUrl: "./language-select.component.html",
  styleUrl: "./language-select.component.css"
})
export class LanguageSelectComponent implements OnInit {

  label_SelectYourLanguage!: string; // label on the screen
  label_btnSelectLanguage!: string; // label on the screen

  lngSelected!: string; // used by CSS to hide/show Submit button

  lngEnglishSelected = false;
  lngFrenchSelected = false;
  lngSpanishSelected = false;

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService) {
    //
  }

  lngDeselectAll() {
    this.lngEnglishSelected = false;
    this.lngFrenchSelected = false;
    this.lngSpanishSelected = false;
  }

  onLanguageChangeRenderMessages = (lng: string) => {
    const msgId = "msg_language_select_" + lng;
    this.label_SelectYourLanguage = messages[msgId as keyof typeof messages];
    const msgIdBtn = "msg_btn_select_lng_" + lng;
    this.label_btnSelectLanguage = messages[msgIdBtn as keyof typeof messages];
  };

  getTargetUdiFromSvc() {
    var result;
    this.dataSharingService.targetUdi.subscribe(
      (value: string) => {
        console.log("LanguageSelectComponent: Data-Sharing-Svc returned target doc id: ", value);
        result = value;
      }
    );
    return result;
  }

  getTargetLngFromSvc() {
    var result;
    this.dataSharingService.targetLanguage.subscribe(
      (value: string) => {
        console.log("LanguageSelectComponent: Data-Sharing-Svc returned target language: ", value);
        result = value;
      }
    );
    return result;
  }

  ngOnInit() {
    // subscribe to language changes
    this.dataSharingService.targetLanguage.subscribe(this.onLanguageChangeRenderMessages);
  }

  onFlagClick(lng: string) {
    this.lngSelected = lng;
    this.dataSharingService.setTargetLanguage(lng);
    console.log("LanguageSelectComponent selected language: " + this.lngSelected);

    if (lng == "en") { this.lngDeselectAll(); this.lngEnglishSelected = true; }
    if (lng == "fr") { this.lngDeselectAll(); this.lngFrenchSelected = true; }
    if (lng == "es") { this.lngDeselectAll(); this.lngSpanishSelected = true; }
  }

  onSubmit() {
    // we know the language: this.lngSelected
    // we stored the laguage: this.dataSharingService.targetLanguage.subscribe calls back with Observable<string> 
    // we might know the stored UDI: this.dataSharingService.targetUdi.subscribe calls back with Observable<string> 
    var udi = this.getTargetUdiFromSvc();
    var lng = this.getTargetLngFromSvc();
    console.log("LanguageSelectComponent: onSubmit: selected language/udi: " + lng + "/" + udi);

    // no matter whether we have UDI or don't, go to Udi Lookup page
    var url = "lookup-udi/" + udi;
    console.log("LanguageSelectComponent: navigate to: " + url);
    this.router.navigate([url]);
  }

}
