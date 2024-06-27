# Site Internet EAFC-Namur-Cadet

Bienvenue sur le dépôt du site Internet de l'EAFC-Namur-Cadet. Ce projet est construit avec STATAMIC, un CMS flat-file, pour une gestion facile et dynamique du contenu web.

## Prérequis

- PHP 8.3 ou supérieur
- Composer

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-username/EAFC-Namur-Cadet-Website.git
   ```

2. Installez les dépendances :

   ```bash
   composer install
   ```

3. Copiez `.env.example` en `.env` et configurez vos variables d'environnement :

   ```bash
   cp .env.example .env
   ```

4. Lancez le serveur de développement :

   ```bash
   PHP artisan serve --host=192.168.129.0 --port=51730 
   ```
5. Lancer la compilation des assets

   ```bash
    npm run dev
   ```

6. Nettoyez le cache :

   ```bash
    php please stache:clear
    php please stache:warm
    php please stache:refresh
   ```
