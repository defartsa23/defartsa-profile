import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  education: any[] = [];
  workExperience: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/education.json').subscribe(data => {
      this.education = data;
    });

    this.http.get<any[]>('assets/data/work-experience.json').subscribe(data => {
      this.workExperience = data;
    });
  }
}
