import { MessageListPage } from './../message/message';
import { PulsePage } from './../pulse/pulse';
import { Component, Input } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SpeakerListPage } from '../speaker-list/speaker-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @Input()
  messageBadge: number = 0;

  // set the root pages for each tab
  tab1Root: any = PulsePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MessageListPage;
  tab4Root: any = MapPage;
  tab5Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
<<<<<<< HEAD
    this.mySelectedIndex = navParams.data.tabIndex || 1;
=======
    this.mySelectedIndex = navParams.data.tabIndex || 2;
>>>>>>> 0cf86d888a985682aaf793dfefdd358bc90739c5

    this.messageBadge = 3;
  }

}
