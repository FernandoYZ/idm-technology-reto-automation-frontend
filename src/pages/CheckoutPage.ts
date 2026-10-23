import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly pagina: Page) {}

  readonly campoNombre = this.pagina.locator('#first-name');
  readonly campoApellido = this.pagina.locator('#last-name');
  readonly campoCodigoPostal = this.pagina.locator('#postal-code');
  readonly botonContinuar = this.pagina.locator('#continue');
  readonly botonFinalizar = this.pagina.locator('#finish');
  readonly mensajeError = this.pagina.locator('[data-test="error"]');
  readonly mensajeConfirmacion = this.pagina.locator('.complete-header');

  async completarDatos(nombre: string, apellido: string, codigoPostal: string) {
    await this.campoNombre.fill(nombre);
    await this.campoApellido.fill(apellido);
    await this.campoCodigoPostal.fill(codigoPostal);
    await this.botonContinuar.click();
  }

  async finalizarCompra() {
    await this.botonFinalizar.click();
  }
}
