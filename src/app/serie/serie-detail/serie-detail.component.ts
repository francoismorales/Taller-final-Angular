import { Component,Input, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieDetail } from '../serieDetail';
import { SerieService } from '../serie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  @Input() serieDetail!: SerieDetail;

  constructor(

  ) { }

 
  ngOnInit() {
    
  }

}
