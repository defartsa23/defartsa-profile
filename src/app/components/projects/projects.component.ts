import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  personalProjects: any[] = [];
  professionalProjects: any[] = [];
  projectTypes: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/projects.json').subscribe(data => {
      // Group projects by type
      const projectsByType = data.reduce((acc, project) => {
        if (!acc[project.type]) {
          acc[project.type] = [];
          this.projectTypes.push(project.type);
        }
        acc[project.type].push(project);
        return acc;
      }, {} as Record<string, any[]>);

      // Set personal and professional projects
      this.personalProjects = projectsByType['Personal'] || [];
      this.professionalProjects = projectsByType['Professional'] || [];
    });
  }
}
