import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  header: ElementRef;

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    (<HTMLHeadingElement>this.header.nativeElement).textContent = 'Title from class';
  }
}
