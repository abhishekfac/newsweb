import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  technewsDisplay:any=[];
  constructor(private _service:NewsapiserviceService) { }

  ngOnInit(): void {
    this._service.techNews().subscribe((result)=>{
      this.technewsDisplay= result.articles;
    })
  }
}
