import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {HeroComponent} from './components/hero/hero.component';
import {AboutComponent} from './components/about/about.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {MediumArticlesComponent} from './components/medium-articles/medium-articles.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    MediumArticlesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'defartsa';
}
