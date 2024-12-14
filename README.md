# AnimatedModal

Este proyecto muestra cómo implementar una animación con React Native utilizando el módulo `Animated`. La animación ejecuta una secuencia de apertura y cierre automáticamente al iniciar la aplicación y puede reiniciarse mediante un botón.

## Funcionalidades
- Animación automática al iniciar la aplicación.
- Secuencia de animación que abre y cierra las vistas.
- Botón para reiniciar la animación manualmente.

## Tecnologías utilizadas
- React Native
- Expo 

## Uso
1. Al iniciar la aplicación, la animación se ejecutará automáticamente.
2. Presiona el botón "Reiniciar animación" para volver a ejecutar la secuencia de animación.

## Explicación del código

### Animación
La animación utiliza la API de `Animated` y está compuesta por una secuencia:
1. **Apertura:**
   - Expande el ancho (`width`) y luego la altura (`height`) de las vistas animadas.
2. **Cierre:**
   - Reduce la altura y luego el ancho para volver al estado inicial.

### Botón de reinicio
El botón llama a la función `runAnimation`, que reinicia la secuencia de animación al presionarlo:

## Autor
Diego Berrio

- [GitHub](https://github.com/DiegoBerrio1601)
- [LinkedIn](https://www.linkedin.com/in/diegoberrio1601)

