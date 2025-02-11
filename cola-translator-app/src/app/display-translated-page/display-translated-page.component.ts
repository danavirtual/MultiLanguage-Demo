import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataSharingService } from "../data-sharing.service";
import { PdfLookupService } from "../pdf-lookup.service";
import { Router } from "@angular/router";
import { PdfDocument } from "../pdf-document";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as messages from "../../../assets/i18n/messages.json";

@Component({
  selector: "app-display-translated-page",
  imports: [CommonModule],
  templateUrl: "./display-translated-page.component.html",
  styleUrl: "./display-translated-page.component.css"
})
export class DisplayTranslatedPageComponent implements OnInit {
  @Input() lng!: string;
  @Input() udi!: string;
  iframeUrl!: SafeUrl;
  label_docTranslated!: string; // label at screen
  pdfDoc!: PdfDocument;
  srcDoc!: PdfDocument;

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService,
    private pdfLookupService: PdfLookupService,
    private sanitizer: DomSanitizer
  ) {
    //
  }

  onLanguageChangeRenderMessages = (lng: string) => {
    const msgId = "msg_doc_translated_" + lng;
    this.label_docTranslated = messages[msgId as keyof typeof messages];
  }

  onSrcDocChangeRenderIt = (d: PdfDocument) => {
    // retrieve src PDF
    this.srcDoc = d;
    // lookup translation
    this.pdfLookupService.getPdfTranslation(this.lng, d.base64Data)
      .subscribe({
        next: (d) => {
          this.pdfDoc = d;
          console.log("Retrieving translation pdfDoc:", this.pdfDoc);
          // translation successful, draw iframe
          const pdfData = "data:application/pdf;base64," + this.pdfDoc.base64Data + "#toolbar=0&navpanes=0";
          // https://stackoverflow.com/questions/36714203/
          this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfData);
        }
        , error: (error) => {
          // Handle error
          console.error("An error occurred:", error);
          //
        }
        , complete: () => console.info("remote call complete")
      });
  }

  ngOnInit() {
    // subscribe to language changes
    this.dataSharingService.targetLanguage.subscribe(this.onLanguageChangeRenderMessages);
    // subscribe to SRC document changes
    this.dataSharingService.srcDoc.subscribe(this.onSrcDocChangeRenderIt);
  }

}
