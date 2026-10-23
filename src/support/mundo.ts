import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductosPage } from '../pages/ProductosPage';
import { CarritoPage } from '../pages/CarritoPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export class Mundo extends World {
  contexto!: BrowserContext;
  pagina!: Page;
  login!: LoginPage;
  productos!: ProductosPage;
  carrito!: CarritoPage;
  checkout!: CheckoutPage;

  constructor(opciones: IWorldOptions) {
    super(opciones);
  }

  iniciarPaginas(pagina: Page) {
    this.pagina = pagina;
    this.login = new LoginPage(pagina);
    this.productos = new ProductosPage(pagina);
    this.carrito = new CarritoPage(pagina);
    this.checkout = new CheckoutPage(pagina);
  }
}

setWorldConstructor(Mundo);
