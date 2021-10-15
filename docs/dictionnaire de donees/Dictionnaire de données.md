# Dictionnaire de données

## commercial_service (`données`)

| Champ            | Type         | Spécificités                                    | Est relié à | Description                         |
| ---------------- | ------------ | ----------------------------------------------- | ----------- | ----------------------------------- |
| id               | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |             | L'identifiant du service commercial |
| commercial_types | VARCHAR(255) | NULL                                            |             | Les différents services commerciaux |

## information_payment (`données`)

| Champ         | Type         | Spécificités                                    | Est relié à | Description                                  |
| ------------- | ------------ | ----------------------------------------------- | ----------- | -------------------------------------------- |
| id            | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |             | L'identifiant de l'information de paiement   |
| payment_types | VARCHAR(255) | NULL                                            |             | Les différents modes de paiement du commerce |

## open_days (`données`)

| Champ         | Type         | Spécificités                                    | Est relié à | Description                                        |
| ------------- | ------------ | ----------------------------------------------- | ----------- | -------------------------------------------------- |
| id            | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |             | L'identifiant de l'information du jour d'ouverture |
| payment_types | VARCHAR(255) | NULL                                            |             | Les différents jours d'ouverture                   |

## Role (`données`)

| Champ | Type         | Spécificités                                    | Est relié à | Description           |
| ----- | ------------ | ----------------------------------------------- | ----------- | --------------------- |
| id    | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |             | L'identifiant du role |
| name  | VARCHAR(255) | NOT NUL                                         |             | Le nom du role        |
| role  | VARCHAR(255) | NOT NUL                                         |             | Le type de role       |

## Store (`données`)

| Champ          | Type          | Spécificités                                    | Est relié à                            | Description                             |
| -------------- | ------------- | ----------------------------------------------- | -------------------------------------- | --------------------------------------- |
| id             | INT           | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |                                        | L'identifiant                           |
| user_id        | INT           | FOREIGN KEY                                     | ON UPDATE RESTRICT, ON DELETE RESTRICT | L'identifiant de l'utilisateur connecté |
| store_activity | VARCHAR(255)  | NOT NULL                                        |                                        | L'activité                              |
| name           | VARCHAR(255)  | NOT NULL                                        |                                        | Nom de l'enseigne                       |
| picture        | VARCHAR(255)  | NULL                                            |                                        | L'image                                 |
| siret          | VARCHAR(255)  | NOT NULL                                        |                                        | Le siret                                |
| road_number    | INT           | NULL                                            |                                        | Le numéro de la rue                     |
| address        | VARCHAR(255)  | NOT NULL                                        |                                        | L'adresse                               |
| postal_code    | INT           | NOT NULL                                        |                                        | Le code postal                          |
| city           | VARCHARD(255) | NOT NULL                                        |                                        | La ville                                |
| email          | VARCHARD(255) | NULL                                            |                                        | L'email                                 |
| phone          | VARCHAR(255)  | NULL                                            |                                        | Le numéro de téléphone                  |
| website        | VARCHAR(255)  | NULL                                            |                                        | L'adresse du site internet              |
| open_hours     | VARCHRD(255   | NOT NULL                                        |                                        | Les horaires d'ouverture du commerce    |
| description    | VARCHAR(300)  | NULL                                            |                                        | La description du commerce              |
| latitude       | DECIMAL(10,8) | NULL                                            |                                        | La description du commerce              |
| description    | DECIMAL(10,8) | NULL                                            |                                        | La description du commerce              |

## User (`donées`)

| Champ     | Type         | Spécificités                                    | Est relié à | Description                    |
| --------- | ------------ | ----------------------------------------------- | ----------- | ------------------------------ |
| id        | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |             | L'identifiant de l'utilisateur |
| email     | VARCHAR(255) | NOT NULL                                        |             | Email de l'utilisateur         |
| roles     | JSON         | NOT NULL                                        |             | Rôle de l'utilisateur          |
| password  | VARCHAR(255) | NOT NULL                                        |             | Mot de passe de l'utilisateur  |
| firstname | VARCHAR(255) | NOT NULL                                        |             | Prénom de l'utilisateur        |
| lastname  | VARCHAR(255) | NOT NULL                                        |             | Nom de l'utilisateur           |

## Store_commercial_service (`relation avec`)

| Champ                 | Type | Spécificités | Est relié à                           |
| --------------------- | ---- | ------------ | ------------------------------------- |
| store_id              | INT  | NOT NULL     | ON UPDATE RESTRICT, ON DELETE CASCADE |
| commercial_service_id | INT  | NOT NULL     | ON UPDATE RESTRICT, ON DELETE CASCADE |

## Store_information_payment (`relation avec`)

| Champ                  | Type | Spécificités | Est relié à                           |
| ---------------------- | ---- | ------------ | ------------------------------------- |
| store_id               | INT  | NOT NULL     | ON UPDATE RESTRICT, ON DELETE CASCADE |
| information_payment_id | INT  | NOT NULL     | ON UPDATE RESTRICT, ON DELETE CASCADE |

## Store_open_days (`relation avec`)

| Champ        | Type | Spécificités | Est relié à                           |
| ------------ | ---- | ------------ | ------------------------------------- |
| store_id     | INT  | NOT NULL     | ON UPDATE RESTRICT, ON DELETE CASCADE |
| open_days_id | INT  | NOT NULL     | ON UPDATE RESTRICT, ON DELETE CASCADE |
