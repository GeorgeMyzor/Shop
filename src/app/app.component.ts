import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  header: ElementRef;

  ngAfterViewInit(): void {
    (<HTMLHeadingElement>this.header.nativeElement).textContent = 'Title from class';
  }
}
