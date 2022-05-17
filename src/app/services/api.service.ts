import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://8100-osas0007-mobdevca3-ewzk2hvcc5t.ws-eu45.gitpod.io/assets/episodes.json')
    }

    getEpisode(id) {
        return this.http.get(`https://8100-osas0007-mobdevca3-ewzk2hvcc5t.ws-eu45.gitpod.io/assets/episode.json`);
    }

    getCharacters() {
        return this.http.get('https://8100-osas0007-mobdevca3-ewzk2hvcc5t.ws-eu45.gitpod.io/assets/characters.json')
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }

    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=Gustavo+Fring`)
    }

}