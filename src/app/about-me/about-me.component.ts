import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  categorys: Array<any> = ['Name', 'Age', 'Location'];
  descriptions: Array<any> = ['Rico Denkewitz', '24', 'Ennepetal , Germany'];

  ngOnInit() {
  }

}
