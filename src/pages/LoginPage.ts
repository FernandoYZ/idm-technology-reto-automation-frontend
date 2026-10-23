import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly pagina: Page) {}

  readonly campoUsuario = this.pagina.locator('#user-name');
  readonly campoClave = this.pagina.locator('#password');
  readonly botonIngresar = this.pagina.locator('#login-button');
  readonly mensajeError = this.pagina.locator('[data-test="error"]');

  async abrir() {
    await this.pagina.goto('/');
  }

  async iniciarSesion(usuario: string, clave: string) {
    await this.campoUsuario.fill(usuario);
    await this.campoClave.fill(clave);
    await this.botonIngresar.click();
  }
}
