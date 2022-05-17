import { FavouriteService } from './../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
	
  quote: any;
  isFavourite = false;
  quoteId = null;  
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private favouriteService: FavouriteService) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://breakingbadapi.com/api/quotes/${id}`).subscribe(res => {
      this.quote = res;
    });
 
    this.favouriteService.isFavourite(this.quoteId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteQuote() {
    this.favouriteService.favouriteQuote(this.quoteId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteQuote() {
    this.favouriteService.unfavouriteQuote(this.quoteId).then(() => {
      this.isFavourite = false;
    });
  }

}
