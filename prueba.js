// git init // crear un nuevo repositorio

// git config user.name "Lauraocampor" // agregar un usuario al archivo
//  git config user.email "laura_ocampo5@hotmail.com"// agregar un correo al archivo

// git config --global user.name "Lauraocampor" // agregar un usuario global
// git config --global user.email "laura_ocampo5@hotmail.com"


// git remote add origin https://github.com/Lauraocampor/prueba-node.git // Tener acceso local


// git clone https://github.com/Lauraocampor/usuarios.git para copiar un repositorio de git


// AQUI ME DOY CUENTA DEL SIGNIFICADO DE GIT PORQUE ÉSTE CONTROLA LAS VERSIONES DEL ARCHIVO, SI HAGO CAMBIOS EN EL ARCHIVO ESTOS NO SE VERÁN REFLEJADOS EN EL STATUS Y APARECERÁN POR FUERA, ASÍ QUE DEBO AGREGAR NUEVAMENTE EL ARCHIVO CON ADD Y REVISAR EL ESTADO CON STATUS PARA VERIFICAR QUE HAYAN SIDO SEGUIDOS
// git status // para saber el estado del repositorio, nos indicarán los archivos presentes en el proyecto


// git add nombredelarchivo.js // nos agregará el archivo seleccionado al repositorio para darle sequimiento y dejará los demás archivos sin seguimiento
// git add . // para agregar todos los archivos seleccionados al reporsitorio y hacerles seguimiento
// la U que se encuentra al lado del archivo debajo del explorer, significa untracked o sin seguimiento.
// Por otro lado la A, significa added.
// debo tener en cuenta estar dentro de la carpeta de los archivos a los cuales le quiero hacer el seguimiento. En el ej pruebaGit sería escribir en la consola cd pruebaGit


// git commit -m " "// confirmación de agregado de archivos, en el " " escribimos el nombre que queremos asignarle al commit// se encarga de controlar la línea de tiempo del proyecto es decir como un checkpoint, cada que definimos un commit le estamos indicando un punto de referencia al proyecto al cual podemos devolvernos en un futuro.
// cuando queremos consultar el estado del git, después de haber creado el commit. Nos aparecerá que no hay nada más para commit anymore,


// git log // con este comando va a registrar un historial de los cambios en el proyecto, es decir, de los commits que se han guardado con el autor, nombre y fecha


// al agregar un nuevo archivo la A desaparecerá porque ya guardamos la información y el nuevo archivo tendrá una U porque apenas fue creado y no tiene seguimiento. Por ello habrá que realizar el procedimiento anterior. Escribiendo, add, commit y log.

// cuando modiciamos un archivo, al lado de éste aparecerá la letra M, mtracked o modificado y si hacemos git status nos aparecerá que hay unos cambios no agregados al commit. Por ello cada que hacemos un cambio será necesario agregar el archivo completo otra vez con git add más el nombre del archivo y luego estará listo para ser comiteado con git commit -m más el nombre que deseamos agregarle al commit entre comillas. Visualizando estos commits con git log


// git push origin master // éste comando pide que se suba el archivo del repositorio local al repositorio remoto y para ello necesitamos que todos los cambios o commits hayan sido guardados
// adicional debemos haber entregado el origen del repositorio remoto esto puede ser con el comando // git remote add origin https:... y agregamos el link del repositorio // la cual después me pedirá acceso a mi gitHub


// git clone https:... y agregamos el link del repostorio // con éste estamos descargando en nuestro repositorio local el archivo que se encuentra remoto. Primero en github donde se encuentra nuestro repositorio, vamos al botón code y de allí en clone copiamos el link. Estando en la carpeta donde queremos guardar el repositorio dejamos el git clone


// git remote -v // con este comando verificamos que la carpeta clonada local si se encuentre sincronizada con el repositorio remoto


// git pull origin master// (para archivos creados desde octubre 2020) para bajar cada vez que lo necesites archivos nuevos

// CONFLICTOS // puede suceder que cuando estemos realizando un proyecto en equipo, tengamos descargado el proyecto y estemos realizando cambios al mismo tiempo en la misma parte y si alguno de los dos realiza push y el otro lo quiera hacer también, aparecerá un error porque el repositorio remoto ya tiene cambios 
// Cuando esto sucede una opción podría ser usar git pull para descargar los cambios de mi compañero y actualizar el proyecto. VSCODE Te permite visualizar dónde son los cambios y si ambos son en la misma línea, podrás comparar y decidir cuál aceptar

// git fetch // no hace ninguna transferencia de archivos. Es más bien como comprobar si hay algún cambio disponible

// SI DESEAMOS CAMBIAR EL ORIGEN // git remote set-url origin https:/... más el link de git hub

// git branch // para saber los nombres que existen en el proyecto
// git checkout más el nombre de la rama a la que quiero acceder // con esto cambio la rama
// Esto con la finalidad de tener archivos o ediciones contenidas en diferentes ramas, a las cuales le puedo hacer un request para combinarla con la principal

// git revert más el numero del commit // esto para revertir algún cambio