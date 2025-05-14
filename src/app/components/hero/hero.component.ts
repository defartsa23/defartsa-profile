import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  name = '';
  title = '';
  location = '';
  email = '';
  website = '';
  linkedin = '';
  medium = '';
  github = '';
  pypi = '';
  summary = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/data/personal-info.json').subscribe(data => {
      this.name = data.name;
      this.title = data.title;
      this.location = data.location;
      this.email = data.email;
      this.website = data.website;
      this.linkedin = data.linkedin;
      this.medium = data.medium;
      this.github = data.github;
      this.pypi = data.pypi;
      this.summary = data.summary;
    });
  }
}
