import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Follower } from '../model/follower';
import { FollowerDTO } from "./follower-dto";

@Injectable({
  providedIn: 'root'
})
export class GithubFollowerService {

  private url = "https://api.github.com/users/mosh-hamedani/followers"

  constructor(private http: HttpClient) { }

  getFollowers(): Observable<Follower[]> {
    return this.http.get<FollowerDTO[]>(this.url)
      .pipe(map(response => this.toFollowers(response)))
  }

  private toFollowers(followersDto: FollowerDTO[]): Follower[] {
    return followersDto.map(this.toFollower)
  }

  private toFollower(followerDto: FollowerDTO): Follower {
    return {
      id: followerDto.id,
      avatar: followerDto.avatar_url,
      username: followerDto.login,
      url: followerDto.html_url
    }
  }
}
