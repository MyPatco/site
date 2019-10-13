import { Component, OnInit } from '@angular/core';
import { Station } from './station.model';
import { StationService } from './station.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent {

  stations: Station[];
  checked = false;

  constructor(public stationService: StationService, private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((e) => {
      console.log(this.route.snapshot.params.id);
      this.stationService
        .geStations(this.route.snapshot.params.id)
        .subscribe(res => (this.stations = res));
    });
  }
  onChange() {
    this.checked = !this.checked;
  }
}
