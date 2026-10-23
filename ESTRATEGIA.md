# Estrategia de automatización – Frontend

## Enfoque

- **BDD con Gherkin en español**: los escenarios se leen como los criterios de aceptación de la historia de usuario.
- **Un feature por flujo de negocio**: login, carrito y compra.
- **Casos positivos y negativos separados por tags** (`@happy`, `@unhappy`).
- **Aislamiento total**: cada escenario usa un `BrowserContext` nuevo (cookies y storage limpios), así no hay dependencias entre escenarios.

## Patrones utilizados

| Patrón | Dónde | Por qué |
|---|---|---|
| Page Object Model | `src/pages/` | Los localizadores y las acciones de cada pantalla viven en un solo lugar. Si cambia la UI, se cambia un archivo. |
| World (Context Sharing) | `src/support/mundo.ts` | Cucumber crea un World por escenario y comparte la página y los Page Objects entre los steps, sin variables globales. |
| Data-Driven Testing | `Esquema del escenario` | Un solo escenario cubre todas las variantes de login inválido y de checkout incompleto. |
| Hooks | `src/support/hooks.ts` | Un navegador para toda la suite (rápido) y un contexto por escenario (aislado). Screenshot automático cuando un escenario falla. |

## Decisiones

- **Steps delgados**: los steps solo llaman a los Page Objects y validan con `expect` de Playwright, que tiene auto-wait. No hay `sleep` ni esperas manuales.
- **Validaciones de resultado**: además del texto visible, se valida la URL para confirmar en qué página quedó el usuario (por ejemplo, que el usuario bloqueado no llega a `inventory.html`).
- **Localizadores estables**: se usan los `id` y `data-test` que expone la app, y `getByRole` para los botones dentro de cada producto.
- **Antecedentes** para el login previo y para llegar al checkout, para que cada escenario muestre solo lo que prueba.
