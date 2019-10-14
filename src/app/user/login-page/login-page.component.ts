import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Station } from '../../station/station.model';
import { StationService } from '../../station/station.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(public stationService: StationService, public afAuth: AngularFireAuth) { }

  saveStations(): void {
    this.stationService
      .createStation();      
  }
}
