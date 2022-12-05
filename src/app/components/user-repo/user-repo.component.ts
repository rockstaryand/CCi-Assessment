import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.scss']
})

export class UserRepoComponent implements OnInit {
  data: any;
  issues: any;
  repoName: string;
  issuesList: any;
  details: any;
  constructor(
    private reposervice: DashboardService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      const username = JSON.parse(localStorage.getItem('username') || '');
      // console.log(username, "store")

      this.reposervice.getRepositories(username).then((response) => {
        this.details = this.reposervice.getRepositoryDetails;
        const realRepo = this.details.filter((repo: any) => repo.id == id);
        this.data = realRepo;
        // console.log(this.data);
        this.data.map((repository: any) => {
          const repo = repository.name
          this.repoName = repo
          console.log(this.repoName)
        })
      })


      this.reposervice.getRepositoriesIssues(username, 'HelloWorld').then(response => {
        this.issues = this.reposervice.getRepositoryDetails;
        const realIssues = this.issues.filter((repo: any) => repo.id == id);
        this.issuesList = realIssues;
        console.log(this.issuesList ?? realIssues, "array?")

      })
    })
  }
}



