import { Component } from '@angular/core';

@Component({
  selector: 'myshop',
  templateUrl: `./app/templates/index.html`,
  styleUrls: ['./app/css/myShopComponents.css']
})
export class AppComponent {
  public premiumAccount = true;
  public recentMovie = "None";
  public Cart = [];
  public movieList = ["Good Will Hunting","7 pounds","Naruto","Attack on Titan"];
  onclick(movie){
    this.recentMovie = movie;
    this.Cart.push(movie);
    alert(movie + " is add to cart!!");
  }
 }
