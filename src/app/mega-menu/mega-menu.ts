import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  imports: [CommonModule],
  templateUrl: './mega-menu.html',
  styleUrl: './mega-menu.css',
})
export class MegaMenu {

  megaMenuData: any = [
    {
      label: "Produkty",
      columns: [
        {
          title: "Kategorie",
          items: [
            {
              label: "Elektronika",
              route: "/produkty/elektronika"
            },
            {
              label: "Domácnost",
              route: "/produkty/domacnost"
            },
            {
              label: "Sport",
              route: "/produkty/sport"
            },
            {
              label: "Móda",
              route: "/produkty/moda"
            }
          ]
        },
        {
          title: "Novinky",
          items: [
            {
              label: "Bestsellery",
              route: "/produkty/bestsellery"
            },
            {
              label: "Slevy",
              route: "/produkty/slevy"
            },
            {
              label: "Nové příchody",
              route: "/produkty/nove"
            }
          ]
        },
        {
          title: "Značky",
          items: [
            {
              label: "Apple",
              route: "/znacky/apple"
            },
            {
              label: "Samsung",
              route: "/znacky/samsung"
            },
            {
              label: "Sony",
              route: "/znacky/sony"
            },
            {
              label: "LG",
              route: "/znacky/lg"
            }
          ]
        }
      ]
    },
    {
      label: "Řešení",
      columns: [
        {
          title: "Pro firmy",
          items: [
            {
              label: "Enterprise",
              route: "/reseni/enterprise"
            },
            {
              label: "SMB",
              route: "/reseni/smb"
            },
            {
              label: "Startup",
              route: "/reseni/startup"
            }
          ]
        },
        {
          title: "Podle odvětví",
          items: [
            {
              label: "E-commerce",
              route: "/reseni/ecommerce"
            },
            {
              label: "Finance",
              route: "/reseni/finance"
            },
            {
              label: "Healthcare",
              route: "/reseni/healthcare"
            },
            {
              label: "Vzdělávání",
              route: "/reseni/vzdelavani"
            }
          ]
        }
      ]
    },
    {
      label: "Zdroje",
      columns: [
        {
          title: "Učení",
          items: [
            {
              label: "Dokumentace",
              route: "/zdroje/dokumentace"
            },
            {
              label: "Tutoriály",
              route: "/zdroje/tutorialy"
            },
            {
              label: "Blog",
              route: "/zdroje/blog"
            },
            {
              label: "Webináře",
              route: "/zdroje/webinare"
            }
          ]
        },
        {
          title: "Podpora",
          items: [
            {
              label: "Help Center",
              route: "/podpora/help-center"
            },
            {
              label: "Komunita",
              route: "/podpora/komunita"
            },
            {
              label: "Kontakt",
              route: "/podpora/kontakt"
            },
            {
              label: "API Status",
              route: "/podpora/api-status"
            }
          ]
        }
      ]
    },
    {
      label: "O nás",
      route: "/o-nas"
    },
    {
      label: "Kontakt",
      route: "/kontakt"
    }
  ];
  activeMenu: string | null = null;
  activeMenuMob: any[] = []
  activeMenuItem: any[] = []
  isMobile: boolean | null = null;
  isMobileMenuOpen: boolean = false;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  showMenu(menuItem: any) {
    if (this.isMobile) {
      const index = this.activeMenuMob.indexOf(menuItem);
      if (index === -1) {
        this.activeMenuMob.push(menuItem);
      } else {
        this.activeMenuMob.splice(index, 1);
      }
    } else {
      this.activeMenu = menuItem;
    }
  }


  showMenuItem(item: any) {
    const index = this.activeMenuItem.indexOf(item);
    if (index === -1) {
      this.activeMenuItem.push(item);
    } else {
      this.activeMenuItem.splice(index, 1);
    }
  }

  hideMenu() {
    this.activeMenu = null;
    this.activeMenuItem = [];
  }

  hasColumns(item: any): boolean {
    return item.columns && item.columns.length > 0;}}


