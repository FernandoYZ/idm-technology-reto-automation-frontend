# Reto QA Frontend – Sauce Demo con Playwright + Cucumber

Suite de pruebas E2E de [Sauce Demo](https://www.saucedemo.com/) escrita en TypeScript, con Gherkin en español y Page Object Model.

## Requisitos

- Node.js 18 o superior (probado con Node 24)

## Instalación

```bash
npm install
npx playwright install chromium
```

## Ejecución

```bash
npm test                      # Toda la suite (headless)
npm run test:happy            # Solo casos positivos
npm run test:unhappy          # Solo casos negativos
npm run test:headed           # Con el navegador visible
```

Si no puedes descargar Chromium, puedes usar un navegador instalado con la variable `CANAL`:

```bash
CANAL=msedge npm test         # Linux / macOS
$env:CANAL='msedge'; npm test # Windows PowerShell
```

## Reporte

El reporte HTML se genera en `reportes/reporte.html`. Cuando un escenario falla, se adjunta un screenshot al reporte.

## Estructura

```
features/                  # Escenarios Gherkin (# language: es)
├── login.feature
├── carrito.feature
└── compra.feature
src/
├── pages/                 # Page Objects (localizadores + acciones)
│   ├── LoginPage.ts
│   ├── ProductosPage.ts
│   ├── CarritoPage.ts
│   └── CheckoutPage.ts
├── steps/                 # Step definitions (solo orquestan y validan)
│   ├── login.steps.ts
│   ├── carrito.steps.ts
│   └── compra.steps.ts
└── support/
    ├── mundo.ts           # World de Cucumber: comparte página y Page Objects
    └── hooks.ts           # Navegador, contexto aislado por escenario, screenshot al fallar
cucumber.js                # Configuración de Cucumber
```

## Cobertura

| Criterio de aceptación | Escenarios |
|---|---|
| Login con credenciales válidas | `standard_user` entra a Products |
| Login con credenciales inválidas | `locked_out_user`, contraseña inválida, usuario inexistente, usuario vacío, contraseña vacía |
| Agregar producto al carrito | Contador del carrito en 1 |
| Ver productos en el carrito | Dos productos listados en el carrito · Eliminar producto deja el carrito vacío |
| Completar la compra | Checkout hasta "Thank you for your order!" · Checkout sin nombre, apellido o código postal |

Consulta la estrategia en [ESTRATEGIA.md](ESTRATEGIA.md).
