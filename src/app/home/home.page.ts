import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public technologies;

constructor() {
   this.declareTechnologies();
}

public filterTechnologies(param: any): void {
   this.declareTechnologies();
   const val: string 	= param;
   // DON'T filter the technologies IF the supplied input is an empty string
   if (val.trim() !== '') {
      this.technologies = this.technologies.filter((item) => {
         return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
   }
}

public onFilter(event): void {
   const category = event.target.value;
   this.declareTechnologies();
   if (category.trim() !== 'all') {
      this.technologies = this.technologies.filter((item) => {
         return item.type.toLowerCase().indexOf(category.toLowerCase()) > -1;
      });
   }
}

public declareTechnologies() {
   this.technologies = [
      {
         name : 'Angular',
         description: 'Front-end development framework',
         image: 'https://via.placeholder.com/150',
         type : 'framework'
      },
      {
         name : 'Apache Cordova',
         description: 'Hybrid application mobile development framework',
         image: 'https://via.placeholder.com/150',
         type : 'framework'
      },
      {
         name : 'Firefox',
         description: 'standards compliant browser',
         image: 'https://via.placeholder.com/150',
         type : 'browser'
      },
      {
         name : 'Chrome',
         description: 'Google&rsquo;s market dominant browser',
         image: 'https://via.placeholder.com/150',
         type : 'browser'
      },
      {
         name : 'Internet Explorer',
         description: 'Microsoft&rsquo;s original flagship browser',
         image: 'https://via.placeholder.com/150',
         type : 'browser'
      },
      {
         name : 'HTML5',
         description: 'Next generation upgrade for HTML language',
         image: 'https://via.placeholder.com/150',
         type : 'language'
      },
      {
         name : 'CSS 3',
         description: 'Stylesheet language featuring animations and transitions',
         image: 'https://via.placeholder.com/150',
         type : 'language'
      },
      {
         name : 'Sass',
         description: 'CSS pre-processor library',
         image: 'https://via.placeholder.com/150',
         type : 'library'
      },
      {
         name : 'TypeScript',
         description: 'Superset of JavaScript',
         image: 'https://via.placeholder.com/150',
         type : 'language'
      },
      {
         name : 'Ionic Native',
         description: 'Ionic compatible plugin library',
         image: 'https://via.placeholder.com/150',
         type : 'library'
      },
      {
         name : 'iOS',
         description: 'Apple mobile operating system',
         image: 'https://via.placeholder.com/150',
         type : 'OS'
      },
      {
         name : 'Android',
         description: 'Popular mobile operating system',
         image: 'https://via.placeholder.com/150',
         type : 'OS'
      },
      {
         name : 'Windows',
         description: 'Microsoft&rsquo;s operating system',
         image: 'https://via.placeholder.com/150',
         type : 'OS'
      },
      {
         name : 'PHP',
         description: 'Server side scripting language',
         image: 'https://via.placeholder.com/150',
         type : 'language'
      },
      {
         name : 'MySQL',
         description: 'Popular open-source database',
         image: 'https://via.placeholder.com/150',
         type : 'database'
      },
      {
         name : 'Mongo DB',
         description: 'Popular NoSQL Database solution',
         image: 'https://via.placeholder.com/150',
         type : 'database'
      },
      {
         name : 'Firebase',
         description: 'Popular backend-as-a-service platform',
         image: 'https://via.placeholder.com/150',
         type : 'platform'
      },
      {
         name : 'Safari',
         description: 'Apple web browser',
         image: 'https://via.placeholder.com/150',
         type : 'browser'
      },
      {
         name : 'Opera',
         description: 'Nimble web browser',
         image: 'https://via.placeholder.com/150',
         type : 'browser'
      },
      {
         name : 'Web Components',
         description: 'Bundled page assets',
         image: '/assets/imgs/web-components-logo.png',
         type : 'library'
      }];
}

}
