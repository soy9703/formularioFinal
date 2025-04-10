<a name="readme-top"></a>

<div align="center">
<!-- cambiar imagen -->
<img src="./stylefmt-logo-png_seeklogo-321809.png" alt="logo" width="140" height="auto" style="border-radius:50%"   />
<br/>
<h3><b>Formulario-Linters-WEBPACK</b></h3>

</div>

# ✅ TABLE OF CONTENTS
- [📖 About the Project](#about-project)
  - [⚒ Build With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
 - [💻 Getting Started](#getting-started)
   - [Setup](#setup)
   - [Prerequisites](#prerequisites)
   - [Install](#install)
   - [Usage](#usage)
   - [Deployment](#deployment)
   - [🔀 Git Branching & GitHub Setup](#git-setup)
- [👥 Authors](#authors)
- [🕹 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐ Show your Support](#support)
- [👏 Acknowledgements ](#acknowledgements)
- [❓ FAQ ](#faq)
- [📃 License](#license)

# 📖 Formulario-Linters-WEBPACK <a name="about-project"></a>

<!-- Formulario-Linters-WEBPACK es un proyecto basado en HTML, CSS, JS - express, node.js que incluye herramientas como Hint, ESLint y Stylelint para mejorar la calidad del código y empaquetado con webpack.
 -->
## ⚒ Build With <a name="built-with"></a>

Este proyecto fue construido usando:

### Tech Stack <a name="tech-stack"></a>

<li> Nodejs </li>
<li> Express </li>
<li> ESLint </li>
<li> Stylelint </li>
<li> Git </li>
<li> GitHub </li>
<li> VScode </li>

<details>
<summary> Node.js </summary>
    <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>    
    </ul>
</details>

### Key Features <a name="key-features"></a>

- Configuración con linters (ESLint y Stylelint)
- Buenas prácticas de desarrollo

## 💻 Getting Started <a name="getting-started"></a>

Para obtener una copia local y ejecutarla, sigue estos pasos:

### Prerequisites

Para ejecutar este proyecto necesitas tener instalados:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)


### Install

Instala las dependencias ejecutando:

      sh
      npm install

### Usage

Para ejecutar el proyecto, usa el siguiente comando:

      sh
      npm start


### 🔀 Git Branching & GitHub Setup <a name="git-setup"></a>

Para configurar el flujo de trabajo en Git y GitHub:

1. Inicializa el repositorio:

         sh
         git init

2. Agrega el repositorio remoto:

         sh
         git remote add origin https://github.com/soy9703/formularioFinal.git

3. Crea y cambia a la rama main:

         sh
         git checkout -b main


4. Crea la rama develop:

         sh
         git checkout -b develop

5. Sube las ramas a GitHub:

         sh
         git push -u origin main
         git push -u origin develop


6. Para trabajar en nuevas características, crea una rama a partir de develop:

         sh
         git checkout -b develop1

7. Una vez termines los cambios, súbelos a GitHub:

         sh
         git add .
         git commit -m "Descripción del cambio"
         git push origin develop1

8. Abre un *Pull Request* desde la rama feature/nueva-funcionalidad hacia develop en GitHub.

9. Una vez aprobado, fusiona los cambios en develop y luego en main cuando todo esté estable.

### Config Linters

Instala las dependencias ejecutando:

Webhint:

      npm install -g @lhci/cli@0.7.x

Styleint:

      npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x

Eslint:

      npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x

### Config Webpack

Webpack:

      npm init -y
      npm install webpack webpack-cli --save-dev

Webpack Css loader:

      npm install --save-dev style-loader css-loader

Webpack html loader:

      npm install --save-dev html-loader

Webpack html plugin:

      npm install --save-dev html-webpack-plugin

Webpack dev server:

      npm install --save-dev webpack-dev-server

Babel Dependency loader:

      npm install --save-dev babel-loader

### Usage

Development mode:

      npm run build-dev

Production mode

      npm start
      npm run build

### Run test

To run tests, run the following command:

To test the Stylelint linter:

      npx stylelint "**/*.{css,scss}"

To test the Webhint:

      npx hint .

To test the ESLint linter:

      npx eslint .

Fix validation errors.

## 👥 Authors <a name="authors"></a>

Cristian Andres Alarcon Sogamoso

- GitHub: [@soy9703](https://github.com/soy9703)

## ⭐ Show your Support

Si te gusta este proyecto, dale una estrella ⭐ en GitHub.

## 👏 Acknowledgements <a name="acknowledgements"></a>

<!-- Agradezco al Servicio Nacional de Aprendizaje SENA por formar para el trabajo, a nuestro instructor quien nos guío para el desarrollo del proyecto y a mis compañeros por apoyar la creación y continuación. -->

## 📃 License <a name="license"></a>

Este proyecto está bajo la licencia MIT.

<p align="right"><a href="#README.md