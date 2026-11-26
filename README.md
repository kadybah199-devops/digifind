# DigiFind

Site vitrine en français pour DigiFind, construit avec Next.js, Tailwind CSS et TypeScript.

## État du projet

- Les pages marketing sont intégrées dans l’App Router.
- Le blog utilise actuellement un jeu d’articles local dans src/lib/blog-content.ts. Il ne lit pas encore les articles depuis une base de données.
- Les écrans d’administration affichent des données de démonstration.
- Les formulaires disposent d’une route serveur prévue pour enregistrer les demandes dans Supabase. Ils ont besoin d’un projet Supabase configuré avant de pouvoir enregistrer des données.
- Ce dépôt cible Supabase (PostgreSQL). Sybase n’est pas configuré.

## Développement local

Prérequis : Node.js 22 ou supérieur et npm.

1. Installer les dépendances avec npm install.
2. Copier .env.example vers .env.local.
3. Renseigner les variables nécessaires dans .env.local à partir de ton projet Supabase et de ton compte d’administration.
4. Lancer npm run dev.

Ne publie jamais .env.local ni la clé SUPABASE_SERVICE_ROLE_KEY. Cette clé doit rester côté serveur.

## Base de données

Le schéma initial est décrit dans supabase/migrations/001_init_schema.sql. Il doit être appliqué et contrôlé sur le projet Supabase cible. Les tables et politiques réelles n’ont pas été vérifiées sur une base connectée.

Les politiques RLS de cette migration doivent être revues avant d’utiliser la base avec des données réelles. L’interface d’administration actuelle n’utilise pas Supabase Auth ; ses écrans restent des aperçus avec données fictives.

## Déploiement Vercel

Le dépôt peut être relié au projet Vercel digifind. Configurer les variables d’environnement dans les environnements Vercel concernés avant d’activer les formulaires. Le projet Git connecté permet les déploiements lors des mises à jour de la branche de production.

Variables prévues : NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, ADMIN_EMAIL, ADMIN_PASSWORD et ADMIN_SESSION_SECRET. NEXT_PUBLIC_SITE_URL documente l’URL publique. RESEND_API_KEY est réservée à une future intégration e-mail.

## Commandes

- npm run dev — serveur local
- npm run lint — vérification ESLint
- npm run build — build de production
