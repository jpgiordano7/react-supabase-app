# React + Supabase App

Este proyecto es una aplicación base construida con **React**, **React Router** y **Supabase** para autenticación y almacenamiento de datos.  
Incluye pantallas de **Login**, **Registro** y **Dashboard** con logout.

---

## **1. Requisitos Previos**
- [Node.js](https://nodejs.org/) (versión 16+)
- [npm](https://www.npmjs.com/) (viene con Node)
- Cuenta gratuita en [Supabase](https://supabase.com)
- Cuenta gratuita en [Vercel](https://vercel.com)

---

## **2. Instalación Local**
1. Clonar el proyecto o descomprimir el archivo ZIP.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar la aplicación:
   ```bash
   npm start
   ```x1
4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## **3. Configuración de Supabase**
1. Ve a [Supabase](https://supabase.com) y crea un proyecto.
2. Copia la **URL del proyecto** y la **clave anónima (anon key)**.
3. En el archivo `src/supabaseClient.js` reemplaza:
   ```javascript
   const supabaseUrl = "https://TU-PROYECTO.supabase.co";
   const supabaseAnonKey = "TU-CLAVE-ANONIMA";
   ```
4. Configura las tablas necesarias (por ejemplo, `users`) en el apartado **SQL Editor** de Supabase.

---

## **4. Estructura de Archivos**
```
react-supabase-app/
│
├── package.json
├── src/
│   ├── index.js
│   ├── App.js
│   ├── supabaseClient.js
│   └── pages/
│       ├── Login.js
│       ├── Register.js
│       └── Dashboard.js
```

---

## **5. Despliegue en Vercel**
1. Sube tu proyecto a un repositorio en **GitHub**.
2. Ve a [Vercel](https://vercel.com) y crea un nuevo proyecto importando tu repositorio.
3. En la sección **Environment Variables** de Vercel, agrega:
   - `REACT_APP_SUPABASE_URL` con tu URL de Supabase.
   - `REACT_APP_SUPABASE_ANON_KEY` con tu clave anónima.
4. Realiza el deploy con un clic y tu app estará online.

---

## **6. Comandos Útiles**
- `npm start` - Inicia el servidor de desarrollo.
- `npm run build` - Genera la versión optimizada para producción.
- `npm test` - Ejecuta los tests (si los configuras).

---

## **7. Próximos Pasos**
- Personaliza las pantallas de Login y Dashboard.
- Agrega más tablas en Supabase según tu lógica de negocio.
- Integra librerías de UI como **Material UI** o **Tailwind CSS** para mejorar el diseño.

---
**¡Listo!** Tu aplicación ya está preparada para crecer.