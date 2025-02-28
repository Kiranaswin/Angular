import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
   imports: [CommonModule,FormsModule],
})
export class HomeComponent {
  searchQuery: string = '';
  technologies = ['Angular', 'React', 'Flutter', '.NET'];
  techCards = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces.',
      link: 'https://react.dev'
    },
    {
      title: 'Angular',
      description: 'A platform for building mobile and desktop web applications.',
      link: 'https://angular.io'
    },
    {
      title: 'Flutter',
      description: 'A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
      link: 'https://flutter.dev'
    }
  ];
  constructor(private router: Router) {}

  onSearch(): void {
    const routeMap: { [key: string]: string } = {
      'react': '/react-list',
      'angular': '/angular-list',
      'flutter': '/flutter-list',
      '.net': '/.NET'
    };
  
    const searchKey = this.searchQuery.trim().toLowerCase();
  
    if (routeMap[searchKey]) {
      this.router.navigate([routeMap[searchKey]]);
    } else {
      alert('Please enter a valid technology: Angular, React, Flutter, .NET');
    }
  }
  
  

  navigateToList(tech: string) {
    this.router.navigate(['/list', tech]);
  }

  logout(){
    this.router.navigate(['/'])
  }
}
