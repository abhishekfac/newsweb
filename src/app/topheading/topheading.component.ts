import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  topHeadingDisplay:any=[];
  constructor(private _service:NewsapiserviceService) { }

  ngOnInit(): void {
    this._service.topHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay= result.articles;
    })
  }

}
