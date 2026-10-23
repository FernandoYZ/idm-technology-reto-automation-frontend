import { Page } from '@playwright/test';

export class CarritoPage {
  constructor(private readonly pagina: Page) {}

  readonly nombresProductos = this.pagina.locator('.cart_item .inventory_item_name');
  readonly botonCheckout = this.pagina.locator('#checkout');

  async eliminarProducto(nombreProducto: string) {
    await this.pagina
      .locator('.cart_item', { hasText: nombreProducto })
      .getByRole('button', { name: 'Remove' })
      .click();
  }

  async irAlCheckout() {
    await this.botonCheckout.click();
  }
}
