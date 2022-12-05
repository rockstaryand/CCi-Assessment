import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  @ViewChild('f') searchRepositoryForm!: NgForm;

  repos: any;
  searchText!: string;
  displayUserRepositoryList = false;
  displayUserErrorMessage = false;
  constructor(private dashboardservice: DashboardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  searchRepositories() {
    this.searchText = this.searchRepositoryForm.value.search;
    localStorage.setItem('username', JSON.stringify(this.searchText));
    this.dashboardservice.getRepositories(this.searchText).then(
      (response) => {
        this.repos = this.dashboardservice.getRepositoryDetails;
        console.log(this.repos, "what we got?")
        this.displayUserRepositoryList = true;
      },
      (error: any) => {
        this.displayUserErrorMessage = true;
        console.log(error)
      }

    )


  }
}
