import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DemoService } from '../../services/demo.service'
import { Document, DocumentResult, PredictionTask } from 'src/app/models/Document';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  tagNER: boolean = true;

  isTextOrLink: string = '1';
  textDocument: string = "It was released on July 24,2015, through Relapse Records ."; // TODO do not fire on empty string
  newspaperUrl: string = null // TODO check if valid newspaper

  predictionsNer: SafeHtml = null
  lang_options = ["en", "hr"]

  selectedLang = "en"
  degree_options = ["very low", "low", "medium", "high"]
  selectedDegree = "high"

  isError: boolean = false
  errorMesssage: string = null
  file: File;
  fileForm: any;

  entity_color = {

    "Name": "#0000ff",

    "Person": "#6666ff",

    // "Name":"#9999ff",

    "Fictional": "#9999ff",

    "Entity": "#9999ff",

    "Profession": "#9999ff",

    "Other": "#9999ff",

    "Organization": "#0099ff",

    "Organization_Other": "#33adff",

    "International_Organization": "#33adff",

    "Show_Organization": "#33adff",

    "Family": "#33adff",

    "Ethnic_Group": "#33adff",

    "Ethnic_Group_Other": "#80ccff",

    "Nationality": "#80ccff",

    "Sports_Organization": "#33adff",

    "Sports_Organization_Other": "#80ccff",

    "Pro_Sports_Organization": "#80ccff",

    "Sports_League": "#80ccff",

    "Corporation": "#33adff",

    "Corporation_Other": "#80ccff",

    "Company": "#80ccff",

    "Company_Group": "#80ccff",

    "Political_Organization": "#33adff",

    "Political_Organization_Other": "#80ccff",

    "Government": "#80ccff",

    "Political_Party": "#80ccff",

    "Cabinet": "#80ccff",

    "Military": "#80ccff",

    "Location": "#00ffff",

    "Location_Other": "#66ffff",

    // "Fictional": "#66ffff",

    "Spa": "#66ffff",

    "GPE": "#66ffff",

    "GPE_Other": "#b3ffff",

    "City": "#b3ffff",

    "County": "#b3ffff",

    "Province": "#b3ffff",

    "Country": "#b3ffff",

    "Region": "#66ffff",

    "Region_Other": "#b3ffff",

    "Continental_Region": "#b3ffff",

    "Domestic_Region": "#b3ffff",

    "Geological_Region": "#66ffff",

    "Geological_Region_Other": "#b3ffff",

    "Mountain": "#b3ffff",

    "Island": "#b3ffff",

    "River": "#b3ffff",

    "Lake": "#b3ffff",

    "Sea": "#b3ffff",

    "Bay": "#b3ffff",

    "Astral_Body": "#66ffff",

    "Astral_Body_Other": "#b3ffff",

    "Star": "#b3ffff",

    "Planet": "#b3ffff",

    "Constellation": "#b3ffff",

    "Address": "#66ffff",

    "Address_Other": "#b3ffff",

    "Postal_Address": "#b3ffff",

    "Email": "#b3ffff",

    "URL": "#b3ffff",

    "Facility": "#ff00ff",

    "Facility_Other": "#ff4dff",

    "Facility_Part": "#ff4dff",

    "Archaeological_Place": "#ff4dff",

    "Archaeological_Place_Other": "#ffb3ff",

    "Tumulus": "#ffb3ff",

    "GOE": "#ff4dff",

    "GOE_Other": "#ffb3ff",

    "Public_Institution": "#ffb3ff",

    "School": "#ffb3ff",

    "Research_Institute": "#ffb3ff",

    "Market": "#ffb3ff",

    "Park": "#ffb3ff",

    "Sports_Facility": "#ffb3ff",

    "Museum": "#ffb3ff",

    "Zoo": "#ffb3ff",

    "Amusement_Park": "#ffb3ff",

    "Theater": "#ffb3ff",

    "Worship_Place": "#ffb3ff",

    "Car_Stop": "#ffb3ff",

    "Station": "#ffb3ff",

    "Airport": "#ffb3ff",

    "Port": "#ffb3ff",

    "Line": "#ff4dff",

    "Line_Other": "#ffb3ff",

    "Railroad": "#ffb3ff",

    "Road": "#ffb3ff",

    "Canal": "#ffb3ff",

    "Water_Route": "#ffb3ff",

    "Tunnel": "#ffb3ff",

    "Bridge": "#ffb3ff",

    "Product": "#00ffcc",

    "Product_Other": "#80ffe5",

    "Material": "#80ffe5",

    "Clothing": "#80ffe5",

    "Object": "#ccfff5",

    "Brand": "#ccfff5",

    // "Other": "#ccfff5",

    "Money_Form": "#80ffe5",

    "Drug": "#80ffe5",

    "Substance": "#ccfff5",

    // "Brand": "#ccfff5",

    // "Other": "#ccfff5",

    "Weapon": "#80ffe5",

    // "Object": "#ccfff5",

    // "Brand": "#ccfff5",

    // "Other": "#ccfff5",

    "Stock": "#80ffe5",

    "Award": "#80ffe5",

    "Decoration": "#80ffe5",

    "Offence": "#80ffe5",

    "Service": "#80ffe5",

    "Class": "#80ffe5",

    "Vehicle": "#80ffe5",

    // "Brand": "#ccfff5",

    "Vehicle_Other": "#ccfff5",

    "Car": "#ccfff5",

    "Train": "#ccfff5",

    "Aircraft": "#ccfff5",

    "Spaceship": "#ccfff5",

    "Ship": "#ccfff5",

    "Food": "#80ffe5",

    // "Brand": "#ccfff5",

    "Food_Other": "#ccfff5",

    "Dish": "#ccfff5",

    "Art": "#80ffe5",

    "Art_Other": "#ccfff5",

    "Picture": "#ccfff5",

    "Broadcast_Program": "#ccfff5",

    "Movie": "#ccfff5",

    "Show": "#ccfff5",

    "Music": "#ccfff5",

    "Book": "#ccfff5",

    "Printing": "#80ffe5",

    "Printing_Other": "#ccfff5",

    "Newspaper": "#ccfff5",

    "Magazine": "#ccfff5",

    "Doctrine_Method": "#80ffe5",

    "Doctrine_Method_Other": "#ccfff5",

    "Culture": "#ccfff5",

    "Religion": "#ccfff5",

    "Academic": "#ccfff5",

    "Sport": "#ccfff5",

    "Style": "#ccfff5",

    "Movement": "#ccfff5",

    "Theory": "#ccfff5",

    "Plan": "#ccfff5",

    "Rule": "#80ffe5",

    "Rule_Other": "#ccfff5",

    "Treaty": "#ccfff5",

    "Law": "#ccfff5",

    "Language": "#80ffe5",

    "Language_Other": "#ccfff5",

    "National_Language": "#ccfff5",

    "Unit": "#80ffe5",

    "Unit_Other": "#ccfff5",

    "Currency": "#ccfff5",

    "Event": "##00e600",

    "Personal": "#4dff4d",

    "Event_Other": "#4dff4d",

    "Occasion": "#4dff4d",

    "Occasion_Other": "#b3ffb3",

    "Religious_Festival": "#b3ffb3",

    "Game": "#b3ffb3",

    "Conference": "#b3ffb3",

    "Historical_Event": "#4dff4d",

    // "Other": "#b3ffb3",

    "Incident": "#b3ffb3",

    "War": "#b3ffb3",

    "Natural_Phenomenon": "#4dff4d",

    "Natural_Phenomenon_Other": "#b3ffb3",

    "Natural_Disaster": "#b3ffb3",

    "Earthquake": "#b3ffb3",

    "Natural_Object": "#bf4080",

    "Natural_Object_Other": "#d279a6",

    "Element": "#d279a6",

    "Compound": "#d279a6",

    "Mineral": "#d279a6",

    "Living_Thing": "#d279a6",

    "Living_Thing_Other": "#e6b3cc",

    "Fungus": "#e6b3cc",

    "Mollusc_Arthropod": "#e6b3cc",

    "Insect": "#e6b3cc",

    "Fish": "#e6b3cc",

    "Amphibia": "#e6b3cc",

    "Reptile": "#e6b3cc",

    "Bird": "#e6b3cc",

    "Mammal": "#e6b3cc",

    "Flora": "#e6b3cc",

    "Living_Thing_Part": "#d279a6",

    "Living_Thing_Part_Other": "#e6b3cc",

    "Animal_Part": "#e6b3cc",

    "Flora_Part": "#e6b3cc",

    "Disease": "#ff661a",

    "Disease_Other": "#ff9966",

    "Animal_Disease": "#ff9966",

    "Color": "#ffff00",

    "Color_Other": "#ffff4d",

    "Nature_Color": "#ffff4d",

    "Time_TOP": "#ff0000",

    "Time_TOP_Other": "#ff471a",

    "Timex": "#ff471a",

    "Timex_Other": "#ff704d",

    "Time": "#ff704d",

    "Date": "#ff704d",

    "Day_Of_Week": "#ff704d",

    "Holiday": "#ff704d",

    "Era": "#ff704d",

    "Timex_Relative": "#ff471a",

    "Timex_Relative_Other": "#ff704d",

    // "Time": "#ff704d",

    // "Date": "#ff704d",

    // "Holiday": "#ff704d",

    // "Day_Of_Week": "#ff704d",

    "Periodx": "#ff471a",

    "Periodx_Other": "#ff704d",

    "Period_Time": "#ff704d",

    "Period_Day": "#ff704d",

    "Period_Week": "#ff704d",

    "Period_Month": "#ff704d",

    "Period_Year": "#ff704d",

    "Numex": "#a6a6a6",

    "Numex_Other": "#bfbfbf",

    "Money": "#bfbfbf",

    "Stock_Index": "#bfbfbf",

    "Point": "#bfbfbf",

    "Percent": "#bfbfbf",

    "Multiplication": "#bfbfbf",

    "Frequency": "#bfbfbf",

    "Age": "#bfbfbf",

    "School_Age": "#bfbfbf",

    "Phone_Number": "#bfbfbf",

    "ID_Number": "#bfbfbf",

    "Ordinal_Number": "#bfbfbf",

    "Rank": "#bfbfbf",

    "Latitude_Longtitude": "#bfbfbf",

    "Measurement": "#bfbfbf",

    "Measurement_Other": "#e6e6e6",

    "Physical_Extent": "#e6e6e6",

    "Space": "#e6e6e6",

    "Volume": "#e6e6e6",

    "Weight": "#e6e6e6",

    "Speed": "#e6e6e6",

    "Intensity": "#e6e6e6",

    "Temperature": "#e6e6e6",

    "Calorie": "#e6e6e6",

    "Seismic_Intensity": "#e6e6e6",

    "Seismic_Magnitude": "#e6e6e6",

    "Countx": "#bfbfbf",

    "Countx_Other": "#e6e6e6",

    "N_Person": "#e6e6e6",

    "N_Organization": "#e6e6e6",

    "N_Location": "#e6e6e6",

    "N_Location_Other": "#f2f2f2",

    "N_Country": "#f2f2f2",

    "N_Facility": "#e6e6e6",

    "N_Product": "#e6e6e6",

    "N_Event": "#e6e6e6",

    "N_Natural_Object": "#e6e6e6",

    "N_Natural_Object_Other": "#f2f2f2",

    "N_Animal": "#f2f2f2",

    "N_Flora": "#f2f2f2"

  }

  showModal: boolean;
  show() {
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  @ViewChild('myInput') myInputVariable: ElementRef;
  closeResult: string;

  constructor(private demoService: DemoService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.selectedLang = this.lang_options[0]
  }
  onToggle(value) {

    this.isTextOrLink = value
    // Clear display
    this.textDocument = null
    this.newspaperUrl = null

    this.predictionsNer = null
    // Clear the textbox
    // TODO Clear the file uploaded
  }
  onToggleAll() {
    this.tagNER = true;
  }
  spansToMarkup(documentResult: DocumentResult, predictionTask: PredictionTask) {
    var hash = documentResult.predictedNerText
    var offset = 0;
    var original = documentResult.text;
    // This will hold the final results
    var final = ""

    hash.forEach((predictions: []) => {
      // http://jsfiddle.net/erzo1t0w/1/
      predictions.forEach((prediction: string[]) => {
        var word = prediction[0]
        var tag = prediction[1]
        if (tag != "O") {
          final += "<mark data-entity='" + tag.toString().toLowerCase() + "'>" + word + "</mark>"
        } else {
          final += word + " "
        }
      });
    });
    console.log(final)
    return this.sanitizer.bypassSecurityTrustHtml(final)
  }
  public fileChanged(event): void {
    const files: FileList = event.target.files; //this.fileUploadEl.nativeElement.files;
    console.log(`files: `, files);
    if (files.length === 0) {
      return;
    };
    this.file = files[0]
  }
  /**
   * Method is use to download file.
   * @param data - Array Buffer data
   * @param type - type of the document.
   */
  downLoadFile(data: any, type: string, filename: string) {
    let blob = new Blob([data], { type: type });
    const a = document.createElement('a')
    const objectUrl = URL.createObjectURL(blob)
    a.href = objectUrl
    a.download = filename;
    a.click();
    URL.revokeObjectURL(objectUrl);
  }

  onUploadFile(form: any) {
    this.resetErrors();

    const params = {
      file: this.file,
      lang: this.selectedLang,
      level: this.degree_options.indexOf(this.selectedDegree) + 1
    }

    this.demoService.upload(params).subscribe(data => {
      this.downLoadFile(data, "text/csv", this.file.name)
    },
      error => {
        if (error.status == "200") {
          this.downLoadFile(error.error.text, "text/csv", this.file.name)
          this.myInputVariable.nativeElement.value = "";
          this.file = null;
        } else {
          console.log(error);
          this.isError = true;
          this.errorMesssage = error.error;
          this.file = null;
        }
      });
  }

  resetErrors() {
    this.isError = false;
    this.errorMesssage = null;
  }

  fileIsUploaded() {
    let result = false;
    if (this.file && this.file != null) {
      result = true;
    }
    return result;
  }

  onSubmit() {
    this.predictionsNer = null

    if (this.isTextOrLink == '1' && this.textDocument) {
      const params = {
        text: this.textDocument,
        lang: this.selectedLang,
        level: this.degree_options.indexOf(this.selectedDegree) + 1
      }
      console.log(params);

      this.demoService.getPrediction(params).subscribe(documentResult => {
        console.log(documentResult);
        this.predictionsNer = this.spansToMarkup(documentResult, PredictionTask.Ner)
      });
    }
    else if (this.isTextOrLink == '2') {
      const params = {
        text: this.newspaperUrl,
        lang: this.selectedLang,
        level: this.degree_options.indexOf(this.selectedDegree) + 1
      }
      if (this.newspaperUrl) {
        this.demoService.getPredictionLink(params).subscribe(documentResult => {
          this.predictionsNer = this.spansToMarkup(documentResult, PredictionTask.Ner)
        }, error => {

          console.log(error);

        });
      }
    }
    else if (this.isTextOrLink == '3') {
      // FILE UPLOAD CODE
      // this.demoService.demoFile()
    }
    // TODO call the service to get the predictions
  }



}
