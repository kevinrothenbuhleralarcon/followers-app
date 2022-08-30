import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, switchMap } from 'rxjs';
import { Follower } from '../model/follower';
import { GithubFollowerService } from '../services/github-follower.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: Follower[] = []
  constructor(
    private route: ActivatedRoute,
    private followerService: GithubFollowerService 
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(combined => {
      const id = combined[0].get("id")
      const page = combined[1].get("page")

      return this.followerService.getFollowers()
    })).subscribe(followers => this.followers = followers)
  }

}
