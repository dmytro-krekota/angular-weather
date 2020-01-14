import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/aw/shared/services/api.service';
import {City} from 'src/aw/shared/types/city.interface';
import {CityModel} from 'src/aw/shared/types/city-model.interface';

@Component({
  selector: 'aw-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: City[] = [
    {
      id: 703448,
      name: 'Kyiv'
    },
    {
      id: 293397,
      name: 'Tel Aviv'
    },
    {
      id: 2643743,
      name: 'London'
    },
    {
      id: 2988507,
      name: 'Paris'
    },
    {
      id: 6545158,
      name: 'Rome'
    }
  ];
  selectedCity: City = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCities(this.cities.map((item: City) => item.id)).subscribe((cityModels: CityModel[]) => {
      cityModels.forEach((cityModel, index) => {
        this.cities[index].averageTemperature = cityModel.main.temp;
        this.cities[index].windSpeed = cityModel.wind.speed;
      });
    });
  }

  selectCity(city: City) {
    this.selectedCity = city;
  }
}
