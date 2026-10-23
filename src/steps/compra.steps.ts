import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Mundo } from '../support/mundo';

When('inicia el checkout', async function (this: Mundo) {
  await this.carrito.irAlCheckout();
});

When(
  'completa sus datos con nombre {string}, apellido {string} y código postal {string}',
  async function (this: Mundo, nombre: string, apellido: string, codigoPostal: string) {
    await this.checkout.completarDatos(nombre, apellido, codigoPostal);
  }
);

When('finaliza la compra', async function (this: Mundo) {
  await this.checkout.finalizarCompra();
});

Then('ve la confirmación {string}', async function (this: Mundo, mensaje: string) {
  await expect(this.checkout.mensajeConfirmacion).toHaveText(mensaje);
  await expect(this.pagina).toHaveURL(/checkout-complete\.html/);
});

Then('ve el error de checkout {string}', async function (this: Mundo, mensaje: string) {
  await expect(this.checkout.mensajeError).toHaveText(mensaje);
  await expect(this.pagina).toHaveURL(/checkout-step-one\.html/);
});
