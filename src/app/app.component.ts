import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'infrrd-assignment';
  public countries;
  public details = {};
  public compareDetails = {};
  public firstSelection = 0;
  public compare: boolean;
  public showModal: boolean;
  constructor(public countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getCountries().subscribe(
      res => {
        this.countries = res;
        console.log(this.countries);
      }
    )
  }

  public saveCode(e): void {
    this.firstSelection++;
    this.showModal = true;
    let name = e.target.value;
    if (this.firstSelection > 1) {
      this.compareDetails = this.details;
    }
    this.details = this.countries.filter(x => x.name === name)[0];
    console.log(this.details);
  }

  public decideToCompare(decision) {
    this.showModal = false;
    this.compare = decision;

  }
}
