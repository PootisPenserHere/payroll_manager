FROM ubuntu:16.04

# Updating
RUN apt-get -y update && apt-get -y upgrade

# Installing php, apache and supplementary software
RUN apt-get -y install apache2 php7.0 libapache2-mod-php7.0 php7.0-cli php7.0-common php7.0-mbstring php7.0-gd php7.0-intl php7.0-xml php7.0-mysql php7.0-mcrypt php7.0-zip curl git unzip composer

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

# Expose apache
EXPOSE 80

# Copy this repo into place.
ADD . /var/www/site
WORKDIR /var/www/site

# Testing permisions
RUN chmod 777 -R .

# Installing dependencies
RUN composer install

# Unit tests
RUN composer test

# Update the default apache site with the config we created.
ADD apache-config.conf /etc/apache2/sites-enabled/000-default.conf

# By default start up apache in the foreground, override with /bin/bash for interative
CMD /usr/sbin/apache2ctl -D FOREGROUND