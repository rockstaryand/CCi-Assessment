import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Repository } from '../data/repositories';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  env = environment;
  getRepositoryDetails: Repository;
  repoName: string;

  constructor(private http: HttpClient) {

    this.getRepositoryDetails = new Repository(
      '',
      '',
      '',
      new Date(),
      '',
    );
  }


  getRepositories(username: string) {
    let repositoryPromise = new Promise<void>((resolve, reject) => {
      this.http
        .get<Repository>(
          this.env.apiBaseUrl +
          '/' +
          username +
          '/repos?sort=created&direction=asc?access_token=' +
          this.env.apiKey
        )
        .toPromise()
        .then(
          (response: any) => {
            this.getRepositoryDetails = response;
            resolve();
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        );
    });
    return repositoryPromise;
  };


  getRepositoriesIssues(username: string, repository: string) {
    let repositoryPromise = new Promise<void>((resolve, reject) => {
      this.http
        .get<Repository>(
          this.env.issuesUrl + '/' +
          username +
          '/' + repository +
          '/issues'
        )
        .toPromise()
        .then(
          (response: any) => {
            this.getRepositoryDetails = response;
            resolve();
          },
          (error: any) => {
            reject(error);
            console.log(error);
          }
        );
    });
    return repositoryPromise;
  }

};


