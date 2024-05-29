FROM heroku/php

COPY . /app
RUN chmod +x /app/start.sh
RUN npm install && \
    npm run production && \
    composer install --no-dev --optimize-autoloader


# Set correct permissions for storage and bootstrap/cache
RUN chown -R www-data:www-data /app/storage /app/bootstrap/cache
RUN chmod -R 775 /app/storage /app/bootstrap/cache

CMD ["heroku-php-apache2", "public/"]






