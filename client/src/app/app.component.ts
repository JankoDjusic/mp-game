import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {io} from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild("game")
  private gameCanvas: ElementRef;

  private context: any;
  private socket: any;

  private counter: string = "2";

  public ngOnInit(){
   this.socket = io("http://localhost:3000")
  }

  public ngAfterViewInit(){
    this.context = this.gameCanvas.nativeElement.getContext("2d")
    this.socket.on("coins", (coins: { coin: number; }) => {
    this.counter = coins.coin.toString();

    })
    this.context.fillRect(20, 20, 20, 20)
  }

}
