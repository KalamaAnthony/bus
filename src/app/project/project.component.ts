import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {
  showFirstImage = true;
  image1 = '/assets/great2.jpg';
  image2 = '/assets/grateful.jpg';
  image3 = '/assets/james.jpg';
  image4 = '/assets/jamo.jpg';

  private intervalId: any;

  ngOnInit(): void {
    // Start the slideshow interval to toggle images every 3 seconds
    this.intervalId = setInterval(() => {
      this.showFirstImage = !this.showFirstImage;
    }, 3000); // 3000 ms = 3 seconds
  }

  ngOnDestroy(): void {
    // Clear the interval on component destroy to prevent memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
