import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { I18nService } from '@app/i18n';
import { ViewportScroller } from '@angular/common';

const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  isLoading: boolean = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private i18nService: I18nService,
    private readonly viewPortScroller: ViewportScroller
  ) {}

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.route;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event) => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle(`${title} | NinTech`);
        }
      });

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    // XXX: Corrige scroll no refresh da pagina com fragment
    setTimeout(() => {
      this.route.fragment.subscribe({
        next: (fragment) => {
          if (fragment) {
            this.viewPortScroller.scrollToAnchor(fragment);
          }
        },
      });
    }, 1500);
  }

  ngAfterViewInit(): void {
    // XXX: Corrige scroll na troca de uma rota sem fragment para outra com
    this.route.fragment.subscribe({
      next: (fragment) => {
        if (fragment) {
          setTimeout(() => {
            this.viewPortScroller.scrollToAnchor(fragment);
          }, 0);
        }
      },
    });
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
