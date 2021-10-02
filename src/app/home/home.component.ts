import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Data, CritzlezOSConnectorService } from '../critzlez-osconnector.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public str!: string;
  public num!: number;

  // Start displays "Start" so that the user can start bot. "Stop" is vice versa
  public startStopButton = 'Start';
  public botStarted: boolean | undefined;

  constructor(private http: HttpClient, private critz: CritzlezOSConnectorService) { }

  toggle() {
    this.updateBotStartStatus();
    if (this.botStarted === false || this.botStarted === undefined) {
      this.startBot("true");
    }
    else {
      this.startBot("false");
    }
    this.updateBotStartStatus();

  }

  startBot(str: string) {
    this.critz.getBotStartObservable(str).subscribe(data => { }, error => {
      console.error(error);
      this.startStopButton = 'ERROR, CHECK CONSOLE'
      this.botStarted = undefined;
    });
  }

  updateBotStartStatus() {
    this.critz.getBotStartStatusObservable().subscribe(data => {
      if (data.botStart === "started") {
        this.startStopButton = "Stop";
        this.botStarted = true;
      }
      else {
        this.startStopButton = "Start";
        this.botStarted = false;
      }
    }, error => {
      this.startStopButton = 'ERROR, CHECK CONSOLE'
      this.botStarted = undefined;
      console.error(error);
    });

  }

  ngOnInit(): void {
    this.updateBotStartStatus();
  }

}

export interface botStarter {
  botStart: boolean;
}