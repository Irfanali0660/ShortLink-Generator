import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from 'src/app/coreModule/service/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {


  imageUrl?: SafeResourceUrl;
  Qrcode?:SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer,private fb: FormBuilder,private service:UserService) {
    
   }
  //  converturl?: FormGroup;




   converturl = new FormGroup({
    'shortUrl': new FormControl('',Validators.required),
    })
    
  ngOnInit() {
    const imagePath = '../../../../../assets/link.png'; // Replace with the actual path to your image in the assets folder
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
    this.Qrcode=this.sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/QRcode.png')


    // this.converturl = this.fb.group({
    //   shortUrl: ['', Validators.required],
    // });
  }
  urldetails!:any
  submiturl(){
   if(this.converturl.valid){
    this.service.shorturl(this.converturl.value).subscribe((data)=>{
      this.urldetails=data
    })
   }
  }

}
