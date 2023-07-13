import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from 'src/app/coreModule/service/user.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {


  imageUrl?: SafeResourceUrl;
  Qrcode?:SafeResourceUrl;
  linkimg?:SafeResourceUrl;
  status?: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer,private fb: FormBuilder,private service:UserService,private clipboard: Clipboard) {
    
   }
  //  converturl?: FormGroup;




   converturl = new FormGroup({
    'shortUrl': new FormControl('',Validators.required),
    })
    
  ngOnInit() {
    const imagePath = '../../../../../assets/link.png'; // Replace with the actual path to your image in the assets folder
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
    this.Qrcode=this.sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/QRcode.png')
    this.linkimg=this.sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/Linkimg.png')
    this.status=this.sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/status.png')
  }
  urldetails!:any
  loading!:boolean
  submiturl(){
   if(this.converturl.valid){
    this.loading=true
    this.service.shorturl(this.converturl.value).subscribe((data)=>{
      this.urldetails=data
      this.loading=false
    })
   }
  }

  hostname=environment.frontHost

  copyText() {
    this.clipboard.copy(this.hostname+'/'+this.urldetails.shortUrl);
    // You can also use the clipboard's `copy` method with additional optional parameters.
    // For example: this.clipboard.copy(this.textToCopy, 'Label');
  }

}
