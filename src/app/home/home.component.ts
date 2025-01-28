import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
   imports: [CommonModule,FormsModule],
})
export class HomeComponent {
  searchQuery: string = '';
  carouselImages = [
    { src: 'assets/images/angular.png', alt: 'Angular' },
    { src: 'assets/images/react.png', alt: 'React' },
    { src: 'assets/images/flutter.png', alt: 'Flutter' },
    { src: 'assets/images/dotnet.png', alt: '.NET' }
  ];

  onSearch(): void {
    console.log('Search Query:', this.searchQuery);
   
  }
}
