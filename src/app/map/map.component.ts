import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MapComponent {
  selectedCountryInfo: any;

  constructor(private countryService: CountryService) {}

  onCountrySelect(countryCode: string) {
    this.countryService.getCountryInfo(countryCode).subscribe({
      next: (data: any[][]) => {
        this.selectedCountryInfo = data[1][0];
        console.log('Country data:', this.selectedCountryInfo);
      },
      error: (error: any) => {
        console.error('Error fetching country data:', error);
      },
    });
  }

  onCountryHover(countryCode: string) {
    console.log('Hovered over country:', countryCode);
  }
}
