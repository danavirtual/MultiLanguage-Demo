import { Component } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import * as messages from "../../../assets/i18n/messages.json";

@Component({
  selector: "app-header",
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css"
})
export class HeaderComponent {

  msg_header: string = "";

  constructor(private dataSharingService: DataSharingService) { }

  onLanguageChangeRenderMessages = (lng: string) => {
    const msgId = "msg_header_" + lng;
    this.msg_header = messages[msgId as keyof typeof messages];
  };

  ngOnInit() {
    // subscribe to language changes
    this.dataSharingService.targetLanguage.subscribe(this.onLanguageChangeRenderMessages);
  }
}
