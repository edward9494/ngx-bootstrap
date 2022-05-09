import { DOCUMENT } from '@angular/common';
import { AfterContentInit, Component, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlSerializer } from '@angular/router';
import { Analytics } from '@ngx-bootstrap-doc/docs';
import { filter } from 'rxjs/operators';
import algoliasearch from "algoliasearch/lite";

const algoliaClient = algoliasearch(
  'HYPJ62ELGP',
  '64b81b76c05cb5bf0259b21526c7a916'
);

const searchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params.query || params.query?.length <= 2)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      });
    }
    return algoliaClient.search(requests);
  },
};

@Component({
  selector: 'bs-demo',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentInit {
  showSidebar = false;
  config = {
    searchClient,
    indexName: 'components',
    routing: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private urlSerializer: UrlSerializer,
    private analytics: Analytics,
    @Inject(DOCUMENT) private document: any
  ) {}

  // almost same logic exists in top-menu component
  ngAfterContentInit(): any {
    this.analytics.trackPageViews();
    const getUrl = (router: Router) =>
      router.routerState.snapshot.url.slice(0, router.routerState.snapshot.url.indexOf('#'));
    let _prev = getUrl(this.router);
    const justDoIt = (): void => {
      const _cur = getUrl(this.router);
      this.showSidebar = !!getUrl(this.router);
      if (typeof PR !== 'undefined' && _prev !== _cur) {
        _prev = _cur;
        // google code-prettify
        PR.prettyPrint();
      }

      const hash = this.route.snapshot.fragment;
      if (hash) {
        const target: HTMLElement | null = this.document.getElementById(hash);
        const header: HTMLElement | null = this.document.getElementById('header');
        if (target && header) {
          setTimeout(() => {
            const sidebar: HTMLElement | null = this.document.getElementById('sidebar');
            const targetPosY: number =  innerWidth <= 991 ? target.offsetTop - header.offsetHeight - 6 - (sidebar?.offsetHeight || 0) : target.offsetTop - header.offsetHeight - 6;
            window.scrollTo({top: targetPosY, behavior: 'smooth'});
          }, 100);
        }
      } else {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    };

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => setTimeout(() => justDoIt(), 50));
  }
}
