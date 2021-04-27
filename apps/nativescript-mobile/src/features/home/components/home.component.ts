import { Component } from '@angular/core';
import { setStatusBarColor } from '../../../utils';
import * as app from 'tns-core-modules/application';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  ngOnInit() {
    setStatusBarColor('dark', '#97d9e9');
  }
}
