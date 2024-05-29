#!/bin/bash
set -e
cd /app
npm install
npm run production
RUN chown -R www-data:www-data /app/storage /app/bootstrap/cache && \
    chmod -R 775 /app/storage /app/bootstrap/cache
exec heroku-php-apache2 public/
