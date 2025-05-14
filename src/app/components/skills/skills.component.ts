import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skillCategories: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any[]>('assets/data/skills.json').subscribe(data => {
      this.skillCategories = data;
    });
  }
}
