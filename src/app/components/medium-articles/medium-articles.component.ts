import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-medium-articles',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './medium-articles.component.html',
  styleUrl: './medium-articles.component.css'
})
export class MediumArticlesComponent implements OnInit {
  articles: any[] = [];
  isLoading: boolean = true;
  hasError: boolean = false;
  mediumUsername: string = 'defartsa';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchMediumArticles();
  }

  fetchMediumArticles() {
    // Using a proxy service to fetch Medium RSS feed and convert it to JSON
    // This is necessary because of CORS restrictions
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${this.mediumUsername}`;

    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        if (response.status === 'ok') {
          // Get the latest 3 articles
          this.articles = response.items.slice(0, 3).map((item: any) => {
            // Extract the first image from the content if available
            const imgRegex = /<img[^>]+src="([^">]+)"/;
            const match = item.content.match(imgRegex);
            const image = match ? match[1] : null;

            // Format the publication date
            const pubDate = new Date(item.pubDate);
            const formattedDate = pubDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return {
              title: item.title,
              link: item.link,
              author: item.author,
              pubDate: formattedDate,
              image: image,
              description: this.stripHtmlTags(item.description).substring(0, 150) + '...'
            };
          });
          this.isLoading = false;
        } else {
          this.hasError = true;
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.error('Error fetching Medium articles:', error);
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  // Helper method to strip HTML tags from content
  stripHtmlTags(html: string): string {
    // Create a temporary div element
    const tempDiv = document.createElement('div');
    // Set the HTML content
    tempDiv.innerHTML = html;
    // Return the text content
    return tempDiv.textContent || tempDiv.innerText || '';
  }
}
