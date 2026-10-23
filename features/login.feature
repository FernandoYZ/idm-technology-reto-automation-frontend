# language: es
Característica: Inicio de sesión
  Como cliente de Sauce Demo
  Quiero iniciar sesión
  Para poder comprar productos

  Antecedentes:
    Dado que el cliente está en la página de login

  @happy
  Escenario: Login exitoso con el usuario estándar
    Cuando inicia sesión con el usuario "standard_user" y la contraseña "secret_sauce"
    Entonces ve la página de productos

  @unhappy
  Esquema del escenario: Login fallido - <caso>
    Cuando inicia sesión con el usuario "<usuario>" y la contraseña "<clave>"
    Entonces ve el mensaje de error "<mensaje>"

    Ejemplos:
      | caso                 | usuario         | clave         | mensaje                                                                   |
      | usuario bloqueado    | locked_out_user | secret_sauce  | Epic sadface: Sorry, this user has been locked out.                       |
      | contraseña inválida  | standard_user   | clave_erronea | Epic sadface: Username and password do not match any user in this service |
      | usuario inexistente  | usuario_falso   | secret_sauce  | Epic sadface: Username and password do not match any user in this service |
      | usuario vacío        |                 | secret_sauce  | Epic sadface: Username is required                                        |
      | contraseña vacía     | standard_user   |               | Epic sadface: Password is required                                        |
