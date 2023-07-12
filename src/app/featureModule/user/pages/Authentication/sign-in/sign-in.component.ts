import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  imageUrl?: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const imagePath = '../../../../../assets/homepage.png'; // Replace with the actual path to your image in the assets folder
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
  }
  

}
