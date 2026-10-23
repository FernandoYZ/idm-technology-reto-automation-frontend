# language: es
Característica: Carrito de compras
  Como cliente de Sauce Demo
  Quiero agregar productos al carrito
  Para comprarlos después

  Antecedentes:
    Dado que el cliente inició sesión como "standard_user"

  @happy
  Escenario: Agregar un producto desde la página de productos
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Entonces el contador del carrito muestra "1"

  @happy
  Escenario: Ver los productos agregados en el carrito
    Cuando agrega los productos al carrito:
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
    Y abre el carrito de compras
    Entonces el contador del carrito muestra "2"
    Y ve en el carrito los productos:
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |

  @unhappy
  Escenario: Eliminar el único producto deja el carrito vacío
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Y abre el carrito de compras
    Y elimina el producto "Sauce Labs Backpack" del carrito
    Entonces el carrito queda vacío
