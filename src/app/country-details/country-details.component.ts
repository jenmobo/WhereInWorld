import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { HttpService } from '../service/http.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Details } from '../models/details'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  countryName;
  countryDetails: Details;
  faArrowLeft = faArrowLeft;
  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.countryName = this.route.snapshot.params['country']
    //This will Receive the route parameters and load data accordingly.
    this.http.getCountry(this.countryName).subscribe(data => {      
      this.countryDetails = data[0]
      this.countryDetails.alpha2Code = "https://flagcdn.com/256x192/"+this.countryDetails.alpha2Code.toLowerCase()+".png";
      console.log(this.countryDetails.alpha2Code);
    })
  }

}
