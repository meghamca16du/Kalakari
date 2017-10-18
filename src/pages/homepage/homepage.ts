import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav,NavParams } from 'ionic-angular';

/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PageInterface{
  title:string;
  pageName:string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Home' , pageName: 'TabsPage' , tabComponent: 'HomepagePage', index: 0 , icon: 'home'},
    {title: 'Shop By Category' , pageName: 'TabsPage' , tabComponent: 'ShopbycategoryPage', index: 1 , icon: 'home'},
    {title: 'Contact Us' , pageName: 'TabsPage' , tabComponent: 'ContactusPage' , icon: 'home'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface){

  }

  isActive(page: PageInterface){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}
