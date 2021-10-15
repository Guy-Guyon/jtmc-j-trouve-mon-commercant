# Route application JTMC

## Sprint 0

| URL                                 | HTTPMethod | Controller                | Method | Name                 | Content                             | Comment                    |
| ----------------------------------- | ---------- | ------------------------- | ------ | -------------------- | ----------------------------------- | -------------------------- |
| /admin                              | GET        | DashboardController       | read   | admin                | Administrator page                  | Only logged in as an admin |
| /                                   | GET        | MainController            | read   | homepage             | Home page                           | No connection required     |
| /api                                | GET        | MainController            | read   | apiActivity          | Api Geolocalisation                 | Used to filter activity    |
| /api                                | GET        | MainController            | read   | apiService           | Api Geolocalisation                 | Used to filter services    |
| /{id}                               | GET        | MainController            | read   | store_read           | Displayed trade                     | No connection required     |
| /legals-mention                     | GET        | MainController            | read   | legal_mention        | Displayed legal notices             | No connection required     |
| /team-jtmc                          | GET        | MainController            | read   | team_jtmc            | Displayed team jtmc                 | No connection required     |
| /inscription                        | GET        | RegisterController        | create | register             | Displayed the registration form     | No connection required     |
| /connection                         | GET        | SecurityController        | read   | app_login            | Displayed the connexion form        | No connextion required     |
| /deconnexion                        | GET/POST   | SecurityController        | read   | app_logout           | Action to sign out                  | Connexion required         |
| /compte                             | GET/POST   | AccountController         | login  | account              | Viewing the merchant's account      | Connexion required         |
| /compte/modifier-votre-mot-de-passe | GET/POST   | AccountPasswordController | logout | account_password     | Displays the password change form   | Connexion required         |
| /compte/commerces                   | GET/POST   | AccountStoreController    | read   | account_store        | Diplays trade                       | Connexion required         |
| /compte/ajouter-votre-commerce      | GET/POST   | AccountStoreController    | create | account_store_add    | Displays the business creation form | Connexion required         |
| /compte/editer votre commerce/{id}  | GET/POST   | AccountStoreController    | update | account_store_edit   | Displays a trade change form        | Connexion required         |
| /compte/supprimer-votre-compte/{id} | GET/POST   | AccountStoreController    | delete | account_store_delete | Deletes a business                  | Connexion required         |
| /compte/votre-commerce/{id}         | GET/POST   | AccountStoreController    | read   | account_store_show   | Diplays trade                       | connexion required         |

