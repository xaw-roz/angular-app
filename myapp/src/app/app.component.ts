import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends OnInit{
  title = 'app works!';
  starsCount : number=2;
  public showStars()
  {
    console.log(this.starsCount);
  }

  ngOnInit()
  {
    console.log(this.starsCount);
  }


}
