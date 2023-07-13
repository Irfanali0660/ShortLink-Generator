import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/coreModule/service/user.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

constructor(private route: ActivatedRoute,private service:UserService,private router: Router,private spinner: NgxSpinnerService){}

shortUrlId!: string | null;
loading!:boolean
image!:string
ngOnInit() {

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

  this.shortUrlId = this.route.snapshot.paramMap.get('id');
  // Handle the rendering or redirection logic based on the short URL ID
  this.loading=true
  this.service.shorturlcheck(this.shortUrlId).subscribe((urldetails)=>{
    console.log(urldetails[0].orginalUrl,"URL DETAILS");
    
    // window.open(urldetails[0].orginalUrl);
    this.loading=false
    window.location.href=urldetails[0].orginalUrl
  })


  this.image='../../../../../assets/loading.gif'
}


}
