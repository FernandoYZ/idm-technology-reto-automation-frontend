import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Mundo } from '../support/mundo';

const CLAVE_VALIDA = 'secret_sauce';

Given('que el cliente está en la página de login', async function (this: Mundo) {
  await this.login.abrir();
});

Given('que el cliente inició sesión como {string}', async function (this: Mundo, usuario: string) {
  await this.login.abrir();
  await this.login.iniciarSesion(usuario, CLAVE_VALIDA);
  await expect(this.productos.titulo).toHaveText('Products');
});

When(
  'inicia sesión con el usuario {string} y la contraseña {string}',
  async function (this: Mundo, usuario: string, clave: string) {
    await this.login.iniciarSesion(usuario, clave);
  }
);

Then('ve la página de productos', async function (this: Mundo) {
  await expect(this.pagina).toHaveURL(/inventory\.html/);
  await expect(this.productos.titulo).toHaveText('Products');
});

Then('ve el mensaje de error {string}', async function (this: Mundo, mensaje: string) {
  await expect(this.login.mensajeError).toHaveText(mensaje);
  await expect(this.pagina).not.toHaveURL(/inventory\.html/);
});
