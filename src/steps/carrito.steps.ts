import { When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Mundo } from '../support/mundo';

When('agrega el producto {string} al carrito', async function (this: Mundo, producto: string) {
  await this.productos.agregarAlCarrito(producto);
});

When('agrega los productos al carrito:', async function (this: Mundo, tabla: DataTable) {
  for (const [producto] of tabla.raw()) {
    await this.productos.agregarAlCarrito(producto);
  }
});

When('abre el carrito de compras', async function (this: Mundo) {
  await this.productos.irAlCarrito();
});

When('elimina el producto {string} del carrito', async function (this: Mundo, producto: string) {
  await this.carrito.eliminarProducto(producto);
});

Then('el contador del carrito muestra {string}', async function (this: Mundo, cantidad: string) {
  await expect(this.productos.contadorCarrito).toHaveText(cantidad);
});

Then('ve en el carrito los productos:', async function (this: Mundo, tabla: DataTable) {
  const productosEsperados = tabla.raw().map(([producto]) => producto);
  await expect(this.carrito.nombresProductos).toHaveText(productosEsperados);
});

Then('el carrito queda vacío', async function (this: Mundo) {
  await expect(this.carrito.nombresProductos).toHaveCount(0);
  await expect(this.productos.contadorCarrito).toBeHidden();
});
