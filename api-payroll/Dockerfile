# Stage 1 - the build process
FROM composer:1.7.1 as build-deps
ENV COMPOSER_ALLOW_SUPERUSER 1

WORKDIR /root

COPY . .
RUN composer install
RUN composer test

# Stage 2 - the production environment
FROM ubuntu:16.04

RUN apt-get -y update && apt-get -y upgrade

RUN apt-get -y install apache2 \
php7.0 \
libapache2-mod-php7.0 \
php7.0-cli \
php7.0-common \
php7.0-mbstring \
php7.0-gd \
php7.0-intl \
php7.0-xml \
php7.0-mysql \
php7.0-mcrypt

# Enable apache mods
RUN a2enmod php7.0
RUN a2enmod rewrite

# Update the PHP.ini file, enable <? ?> tags and quieten logging
RUN sed -i "s/short_open_tag = Off/short_open_tag = On/" /etc/php/7.0/apache2/php.ini
RUN sed -i "s/error_reporting = .*$/error_reporting = E_ERROR | E_WARNING | E_PARSE/" /etc/php/7.0/apache2/php.ini

# Manually set up the apache environment variables
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2

WORKDIR /var/www/site
COPY --from=build-deps /root .

RUN touch logs/app.log
RUN chmod 777 logs/app.log

# Update the default apache site
ADD apache-config.conf /etc/apache2/sites-enabled/000-default.conf

# By default start up apache in the foreground
CMD /usr/sbin/apache2ctl -D FOREGROUND
