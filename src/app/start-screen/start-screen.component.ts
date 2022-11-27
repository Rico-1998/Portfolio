import { Component, OnInit } from '@angular/core';

declare function animate(): any;


@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})


export class StartScreenComponent implements OnInit {
  ngOnInit() {
    animate();
  }
}
