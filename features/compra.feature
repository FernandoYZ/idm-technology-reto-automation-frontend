# language: es
Característica: Proceso de compra
  Como cliente de Sauce Demo
  Quiero completar una compra
  Para adquirir los productos que necesito

  Antecedentes:
    Dado que el cliente inició sesión como "standard_user"
    Y agrega el producto "Sauce Labs Backpack" al carrito
    Y abre el carrito de compras
    Y inicia el checkout

  @happy
  Escenario: Completar la compra hasta la confirmación
    Cuando completa sus datos con nombre "Fernando", apellido "Yovera" y código postal "15001"
    Y finaliza la compra
    Entonces ve la confirmación "Thank you for your order!"

  @unhappy
  Esquema del escenario: No se puede continuar el checkout sin <campo>
    Cuando completa sus datos con nombre "<nombre>", apellido "<apellido>" y código postal "<codigo>"
    Entonces ve el error de checkout "<mensaje>"

    Ejemplos:
      | campo         | nombre   | apellido | codigo | mensaje                        |
      | nombre        |          | Yovera   | 15001  | Error: First Name is required  |
      | apellido      | Fernando |          | 15001  | Error: Last Name is required   |
      | código postal | Fernando | Yovera   |        | Error: Postal Code is required |
