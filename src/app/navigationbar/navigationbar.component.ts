import { Component, OnInit } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

declare var $: any;

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $('.wd').removeClass('hidden');

      }
      else {
        $('.wd').addClass('hidden');
      }
    });
  }

}
