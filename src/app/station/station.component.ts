import { Component, OnInit } from '@angular/core';
import { Station } from './station.model';
import { StationService } from './station.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  stations:  Observable<Station[]>;
  checked = false;

  constructor(public stationService: StationService, private route: ActivatedRoute,
    public afAuth: AngularFireAuth) {
  }

  ngOnInit() {    
    this.stations = this.route.paramMap.pipe(
      switchMap(params => {        
        return this.stationService
        .geStations(params.get('id'));        
      }));        
  }

  onChange() {
    this.checked = !this.checked;
  }
}
