import { Page } from '@playwright/test';

export class ProductosPage {
  constructor(private readonly pagina: Page) {}

  readonly titulo = this.pagina.locator('.title');
  readonly contadorCarrito = this.pagina.locator('.shopping_cart_badge');
  readonly enlaceCarrito = this.pagina.locator('.shopping_cart_link');

  async agregarAlCarrito(nombreProducto: string) {
    await this.pagina
      .locator('.inventory_item', { hasText: nombreProducto })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async irAlCarrito() {
    await this.enlaceCarrito.click();
  }
}
