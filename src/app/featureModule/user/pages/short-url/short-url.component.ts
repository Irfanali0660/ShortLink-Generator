import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/coreModule/service/user.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {

constructor(private route: ActivatedRoute,private service:UserService,private router: Router){}

shortUrlId!: string | null;
ngOnInit() {
  this.shortUrlId = this.route.snapshot.paramMap.get('id');
  // Handle the rendering or redirection logic based on the short URL ID
  this.service.shorturlcheck(this.shortUrlId).subscribe((urldetails)=>{
    console.log(urldetails[0].orginalUrl,"URL DETAILS");
    
    // window.open(urldetails[0].orginalUrl);
    window.location.href=urldetails[0].orginalUrl
  })
}
}
