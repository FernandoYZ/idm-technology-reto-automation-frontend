import { After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium } from '@playwright/test';
import { Mundo } from './mundo';

setDefaultTimeout(30_000);

let navegador: Browser;

BeforeAll(async () => {
  navegador = await chromium.launch({
    headless: process.env.HEADLESS !== 'false',
    channel: process.env.CANAL,
  });
});

Before(async function (this: Mundo) {
  this.contexto = await navegador.newContext({ baseURL: 'https://www.saucedemo.com' });
  this.iniciarPaginas(await this.contexto.newPage());
});

After(async function (this: Mundo, { result }) {
  if (result?.status === Status.FAILED) {
    this.attach(await this.pagina.screenshot({ fullPage: true }), 'image/png');
  }
  await this.contexto.close();
});

AfterAll(async () => {
  await navegador.close();
});
