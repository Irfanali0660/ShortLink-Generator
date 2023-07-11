import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {


  imageUrl?: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const imagePath = '../../../../assets/link.png'; // Replace with the actual path to your image in the assets folder
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
  }

}
