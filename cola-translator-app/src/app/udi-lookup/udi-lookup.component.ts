import { Component, Input, ViewChild, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import { FormsModule, NgForm } from "@angular/forms";
import { PdfDocument } from "../pdf-document";
import { PdfLookupService } from "../pdf-lookup.service";
import { Router } from "@angular/router";
import * as messages from "../../../assets/i18n/messages.json";
import { DisplaySrcPageComponent } from "../display-src-page/display-src-page.component";

@Component({
  standalone: true,
  selector: "app-udi-lookup",
  imports: [FormsModule, DisplaySrcPageComponent],
  templateUrl: "./udi-lookup.component.html",
  styleUrl: "./udi-lookup.component.css"
})
export class UdiLookupComponent implements OnInit {
  @Input() udi!: string;
  @ViewChild("myform") myForm!: NgForm;

  /* labels on the screen */
  label_btnClear!: string;
  label_btnSubmit!: string;
  label_btnTranslate!: string;
  label_pdfAvailable!: string;
  label_pdfNotAvailable!: string;
  label_Udi!: string;
  label_UdiLookup!: string;

  udiErrCondition = false;
  udiFoundCondition = false;
  pdfDoc!: PdfDocument;

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService,
    private pdfLookupService: PdfLookupService
  ) {
    //
  }

  onLanguageChangeRenderMessages = (lng: string) => {
    const msgBtnClear = "msg_btn_clear_" + lng;
    this.label_btnClear = messages[msgBtnClear as keyof typeof messages];
    const msgBtnSubmit = "msg_btn_submit_" + lng;
    this.label_btnSubmit = messages[msgBtnSubmit as keyof typeof messages];
    const msgBtnTranslate = "msg_btn_translate_" + lng;
    this.label_btnTranslate = messages[msgBtnTranslate as keyof typeof messages];
    const msgPdfA = "msg_pdf_available_" + lng;
    this.label_pdfAvailable = messages[msgPdfA as keyof typeof messages];
    const msgPdfNotA = "msg_pdf_not_avl_" + lng;
    this.label_pdfNotAvailable = messages[msgPdfNotA as keyof typeof messages];
    const msgUdi = "msg_label_udi_" + lng;
    this.label_Udi = messages[msgUdi as keyof typeof messages];
    const msgUdiLookup = "msg_udi_lookup_" + lng;
    this.label_UdiLookup = messages[msgUdiLookup as keyof typeof messages];
  };

  showMessageDocumentFound(act: boolean) {
    this.udiFoundCondition = act;
    this.udiErrCondition = !act;
  }

  getUdiFromSvc() {
    var result;
    this.dataSharingService.srcDoc.subscribe(
      (value: PdfDocument) => {
        try {
          console.log("LanguageSelectComponent: Data-Sharing-Svc returned doc id: ", value.id);
          result = value.id;
        } catch (error) {
          console.log("LanguageSelectComponent: Data-Sharing-Svc returned doc id: undefined");
        }
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
    // push from backend to frontend, is it needed?
    setTimeout(() => {
      this.myForm.controls["udi"].setValue(this.udi);
    });
  }

  onUdiSearch(event: Event) {
    event.preventDefault();
    const val = this.myForm.form.get("udi")?.value;
    console.log("UdiLookupComponent: udi submitted for search:", val);

    if (val) {
      // Value is not empty
      this.udi = val;

      // lookup
      this.pdfLookupService
        .getPdfById(this.udi)
        .subscribe({
          next: (data) => {
            this.pdfDoc = data;
            console.log("UdiLookupComponent: About to store pdfDoc:", this.pdfDoc);
            this.dataSharingService.setSrcDoc(this.pdfDoc);
            // show message
            this.showMessageDocumentFound(true);
          }
          , error: (error) => {
            // Handle error
            console.error("An error occurred:", error);
            this.showMessageDocumentFound(false);
          }
          , complete: () => console.info("remote call complete")
        });
    }
    else {
      this.showMessageDocumentFound(false);
    }
  }

  onUdiClear(event: Event) {
    event.preventDefault();
    this.myForm.controls["udi"].setValue("");
    this.myForm.reset();
    this.udiFoundCondition = false;
    this.udiErrCondition = false;
  }

  onSubmit(f: NgForm) {
    this.router.navigate(["lng/" + this.udi]);

    // display-translated/:udi/:lng
    var udi = this.getUdiFromSvc();
    var lng = this.getTargetLngFromSvc();
    console.log("UdiLookupComponent: onSubmit: selected language/udi: " + lng + "/" + udi);

    //
    var url = "display-translated/" + udi + "/" + lng + "/";
    console.log("LanguageSelectComponent: navigate to: " + url);
    this.router.navigate([url]);
  }

}
