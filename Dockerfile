# Usa una imagen base oficial de Node.js para construir la aplicación
FROM node:20-alpine as build

# Establece el directorio de trabajo dentro del contenedor,  WORKDIR /usr/src/app
WORKDIR /app

# Copia los archivos de configuración del proyecto
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa de producción

# Usa una imagen base de nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos desde la etapa anterior, COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]