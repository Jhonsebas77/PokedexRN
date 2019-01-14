# PokedexRN
PokedexRN es una Pokedex basica desarrollada en React-Native que nos permite consultar toda la informacion sobre los Pokemones, Objetos y demas

*Desarrollado por:* **Sebastian Otalora**

## Instalación
Primero se debe clonar el proyecto
<kbd>**SSH:** git@github.com:Jhonsebas77/PokedexRN.git</kbd>

## Configuración 
 Una vez clonado el repositorio, configuremos lo básico para poder ejecutar el proyecto  
 
   -  Seguimos los siguientes pasos
	     -  1\. En la terminal nos ubicamos en el directorio con el proyecto en *React-Native* con <kbd>cd /nombre_proyecto </kbd>  
	     - 2\. Ejecutamos <kbd>yarn install </kbd>  
	     
	   - 3\. En terminales distintas, ejecutamos en la primera ventana <kbd>yarn run watch</kbd>, en otra ejecutamos <kbd>react-native start --reset-cache</kbd> y por ultimo  <kbd>react-native run-ios</kbd> / <kbd>react-native run-android</kbd>

## Problemas de instalacion 

En caso del error:

            A problem occurred evaluating project ':react-native-linear-gradient'.
            > Could not find method compileOnly() for arguments [com.facebook.react:react-native:+] on object of type org.gradle.api.internal.artifacts.dsl.dependencies.DefaultDependencyHandler.

        Ejecutar:
<kbd>sed -i '' 's/compileOnly "com.facebook.react:react-native:+"/provided "com.facebook.react:react-native:+"/g' ./node_modules/react-native-linear-gradient/android/build.gradle</kbd> 

## Preview [Work in progress]

![Preview](https://s3.us-east-2.amazonaws.com/pokedex-jsob/UI/Git_Preview.png)
