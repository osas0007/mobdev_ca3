import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
      this.deaths = this.http.get ('https://www.breakingbadapi.com/api/deaths')
  }

  openDetails(death){
    let split = death.url.split('/');
    let deathId = split[split.length-2];
      this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
  }
}
