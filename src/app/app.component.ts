import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;



  public appPages = [
    {
      id: 1,
      title: 'JavaScript',
      url: '/category/JavaScript',
      icon: 'logo-javascript',

    },
    {
      id: 2,
      title: 'Python',
      url: '/category/Python',
      icon: 'logo-python'
    },
    {
      id: 3,
      title: 'Ionic',
      url: '/category/ionic',
      icon: 'aperture'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('category/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
   localStorage.setItem('course', JSON.stringify(this.appPages[0]))
  }

  setIt = (p) => {
    localStorage.setItem('course', JSON.stringify(p))
  }

}
