# Next.js SaaS + RBAC

Next SaaS é um projeto de software como serviço (SaaS) construído com as seguintes tecnologias:

## Stacks Utilizadas

**Linguagens**:

- TypeScript

**Frameworks e Bibliotecas**:

- Next.js
- React
- Tailwind CSS

**Ferramentas**:

- ESLint (com configurações personalizadas em `config/eslint-config`)
- Prettier (com configurações personalizadas em `config/prettier`)
- TurboRepo
- pnpm

## Finalidade do Projeto

O objetivo do Next SaaS é fornecer uma plataforma SaaS robusta e escalável. Ele é construído com Next.js, um framework React para renderização no servidor e geração de sites estáticos, o que permite uma experiência de usuário aprimorada e um desempenho otimizado.

O projeto segue práticas recomendadas de desenvolvimento, com configurações personalizadas de ESLint e Prettier para manter a consistência do código. As configurações de ESLint estão localizadas em `config/eslint-config`, enquanto as configurações de Prettier estão em `config/prettier`. Além disso, utiliza o Turbo para build e cache inteligente, e o pnpm como gerenciador de pacotes, melhorando a eficiência do desenvolvimento.

Com sua arquitetura modular e escalável, o Next SaaS pode ser facilmente estendido e personalizado para atender às necessidades específicas de diferentes casos de uso de SaaS.

### This project contains all the necessary boilerplate to setup a multi-tenant SaaS with Next.js including authentication and RBAC authorization.

## Features

### Authentication

- [ ] It should be able to authenticate using e-mail & password;
- [ ] It should be able to authenticate using Github account;
- [ ] It should be able to recover password using e-mail;
- [ ] It should be able to create an account (e-mail, name and password);

### Organizations

- [ ] It should be able to create a new organization;
- [ ] It should be able to get organizations to which the user belongs;
- [ ] It should be able to update an organization;
- [ ] It should be able to shutdown an organization;
- [ ] It should be able to transfer organization ownership;

### Invites

- [ ] It should be able to invite a new member (e-mail, role);
- [ ] It should be able to accept an invite;
- [ ] It should be able to revoke a pending invite;

### Members

- [ ] It should be able to get organization members;
- [ ] It should be able to update a member role;

### Projects

- [ ] It should be able to get projects within a organization;
- [ ] It should be able to create a new project (name, url, description);
- [ ] It should be able to update a project (name, url, description);
- [ ] It should be able to delete a project;

### Billing

- [ ] It should be able to get billing details for organization ($20 per project / $10 per member excluding billing role);

## RBAC

Roles & permissions.

### Roles

- Owner (count as administrator)
- Administrator
- Member
- Billing (one per organization)
- Anonymous

### Permissions table

|                        | Administrator | Member | Billing | Anonymous |
| ---------------------- | ------------- | ------ | ------- | --------- |
| Update organization    | ✅            | ❌     | ❌      | ❌        |
| Delete organization    | ✅            | ❌     | ❌      | ❌        |
| Invite a member        | ✅            | ❌     | ❌      | ❌        |
| Revoke an invite       | ✅            | ❌     | ❌      | ❌        |
| List members           | ✅            | ✅     | ✅      | ❌        |
| Transfer ownership     | ⚠️            | ❌     | ❌      | ❌        |
| Update member role     | ✅            | ❌     | ❌      | ❌        |
| Delete member          | ✅            | ⚠️     | ❌      | ❌        |
| List projects          | ✅            | ✅     | ✅      | ❌        |
| Create a new project   | ✅            | ✅     | ❌      | ❌        |
| Update a project       | ✅            | ⚠️     | ❌      | ❌        |
| Delete a project       | ✅            | ⚠️     | ❌      | ❌        |
| Get billing details    | ✅            | ❌     | ✅      | ❌        |
| Export billing details | ✅            | ❌     | ✅      | ❌        |

> ✅ = allowed
> ❌ = not allowed
> ⚠️ = allowed w/ conditions

#### Conditions

- Only owners may transfer organization ownership;
- Only administrators and project authors may update/delete the project;
- Members can leave their own organization;
