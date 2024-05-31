import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { Subscription, filter } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavigationEnd,Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopBarComponent,SideBarComponent,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnDestroy {

  overlayMenuOpenSubscription!: Subscription;

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(SideBarComponent) appSidebar!: SideBarComponent;

  @ViewChild(TopBarComponent) appTopbar!: TopBarComponent;

  constructor(public layoutService: LayoutService, public renderer: Renderer2, public router: Router) {

    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {

      if(!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {

          const isOutSideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target)
        || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
          
        if(isOutSideClicked) {

          this.hideMenu()
        }

        })
      }
      
    })

    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe(() => {
                this.hideMenu();
                // this.hideProfileMenu();
            });
} 

hideMenu() {
  this.layoutService.state.overlayMenuActive = false;
  this.layoutService.state.staticMenuMobileActive = false;
  this.layoutService.state.menuHoverActive = false;
  if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
  }
  this.unblockBodyScroll();
}



unblockBodyScroll(): void {
  if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
  }
  else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
          'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

blockBodyScroll(): void {
  if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
  }
  else {
      document.body.className += ' blocked-scroll';
  }
}

get containerClass() {
  return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple
  }
}


ngOnDestroy(): void {
  if (this.overlayMenuOpenSubscription) {
    this.overlayMenuOpenSubscription.unsubscribe();
}

if (this.menuOutsideClickListener) {
    this.menuOutsideClickListener();
}
    
}

}
