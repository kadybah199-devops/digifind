# DigiFind

Site vitrine en français pour le cabinet DigiFind, construit avec Next.js, Tailwind CSS et Supabase. Les formulaires de contact, de devis et de rendez-vous enregistrent leurs demandes dans Supabase.

## Démarrage local

1. Copier `.env.example` vers `.env.local` et compléter les identifiants Supabase.
2. Dans Supabase, exécuter `supabase/migrations/001_init_schema.sql` dans l’éditeur SQL.
3. Lancer `npm install`, puis `npm run dev`.

Variables requises :

- `NEXT_PUBLIC_SUPABASE_URL` : URL du projet Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` : clé publique (utilisée par les fonctions Supabase côté client).
- `SUPABASE_SERVICE_ROLE_KEY` : clé privée, utilisée uniquement par l’API serveur. Ne jamais la préfixer par `NEXT_PUBLIC_`.
- `NEXT_PUBLIC_SITE_URL` : URL publique du site.
- `ADMIN_EMAIL` et `ADMIN_PASSWORD` : identifiants privés pour `/admin`.
- `ADMIN_SESSION_SECRET` : secret aléatoire d’au moins 32 caractères pour signer les sessions admin.

`RESEND_API_KEY` est facultative et réservée à l’ajout futur des notifications par e-mail.

## Déploiement sur Vercel

Importer le dépôt GitHub dans Vercel avec le preset Next.js, ajouter les variables d’environnement ci-dessus dans les paramètres du projet, puis lancer le déploiement. Remplacer les valeurs d’exemple et générer un secret admin propre à la production. Le projet est prêt pour le déploiement Vercel et n’a pas besoin d’un fichier `vercel.json` personnalisé.

## Dépôt et services

Le répertoire de travail doit être relié à un dépôt GitHub pour permettre les déploiements automatiques et les previews Vercel. La base de données est fournie par Supabase (PostgreSQL) ; Sybase n’est pas configuré dans ce projet.
