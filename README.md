# UCLA Library Website Components Monorepo

## A monorepo for ucla library component library and nuxt module for auto imports

## 📁 Monorepo Structure

```
/
├── .github/              # GitHub Actions workflows for CI/CD
├── packages/             # Contains individual packages
│   ├── vue-component-library/  # The primary Vue 3 component library
│   └── nuxt-module/            # Nuxt 3 module to auto-import components
├── .gitignore
├── pnpm-workspace.yaml    # PNPM workspace configuration
├── package.json           # Root-level metadata and scripts
├── README.md              # This documentation file
└── ...

```

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/UCLALibrary/ucla-library-website-components.git
cd ucla-library-website-components
```

### 2. Install Dependencies

```
pnpm install
```

---

## packages/vue-component-library

This monorepo contains the ucla-library-website-components library, a Vue 3 component library designed for UCLA Library websites using Nuxt 3. The monorepo utilizes:
PNPM workspaces for dependency management.

- Vite for building the component library.

- Semantic Release for automated versioning.

- PNPM Publish for package publication.

- GitHub Actions for CI/CD workflows.

### 🔧 Development Commands

#### 1. Running Storybook

```
pnpm lib:storybook
```

#### 2. Running cypress

```
pnpm lib:cypress
```

#### 3. Running Build

```
pnpm lib:build
```

#### Run Chromatic Checks (Visual Regression)

- Chromatic runs automatically when merged into main.
- For manual Chromatic checks:
  1. Visit the GitHub Actions tab.
  2. Run the "Chromatic" workflow manually.
- Chromatic checks run in CI/CD after merging into main.

---

### Recursive scripts to run lint and build packages

```
pnpm -r lint:fix
```

---

## 📦 Packages

- @ucla-library-monorepo/ucla-library-website-components
  - Vue 3 component library

  - Built with Vite and TypeScript

  - Exports components individually for optimal tree-shaking

- @ucla-library/nuxt-module
  - Nuxt 3 module that auto-imports the above components

## 🔄 Release & Publishing Workflow

#### Versioning with Semantic Release

- **Versioning**: Managed by Semantic Release based on commit messages.

- **Publishing**: Handled via PNPM Publish for greater control over registry updates.

#### Steps for Publishing a New Release

1. Create a new branch with your changes.
2. Follow conventional commit standards to tag your commits.
3. Open a pull request.
4. Upon merging into main, GitHub Actions will:

- Run Chromatic checks.
- Perform a release using semantic-release.
- Publish the package using pnpm publish.

## 📥 Usage in Nuxt Projects as a vue component library

### Installation

```
pnpm add --save-dev @ucla-library-monorepo/ucla-library-website-components
```

or

```
pnpm install @ucla-library-monorepo/ucla-library-website-components --save-dev
```

### Update nuxt.config.ts Adding Global CSS

```
 css: [
   '@ucla-library-monorepo/ucla-library-website-components/style.css',
  ],
```

### Importing Components

For direct imports:

```
import { ButtonLink } from '@ucla-library-monorepo/ucla-library-website-components'
```

### ⚠️ Gotchas & Best Practices

1. Always install or add packages from the root

- if adding a package to component library

```
pnpm --filter @ucla-library-monorepo/ucla-library-website-components add lodash
```

- if adding package to root use

```
pnpm install semantic-release-monorepo -w
```

## Local Development with `pnpm link`

Use `pnpm link` to test local changes to the Nuxt module in the `library-website-nuxt` application without publishing a new version to npm.

> **Note:** These instructions are for **pnpm 11+**. Global linking (`pnpm link --global`) is no longer supported. Instead, link directly to the local package directory.

### Prerequisites

- Both repositories should use the pnpm version pinned in their respective `package.json` files.
- Enable Corepack before working with the repositories:

```bash
corepack enable
```

Verify the active pnpm version:

```bash
pnpm --version
```

If the version does not match the version pinned in the repository's `packageManager` field, run:

```bash
corepack use pnpm@<version>
```

Replace `<version>` with the version specified in the repository's `packageManager` field.

---

### 1. Build the Nuxt Module

From the `ucla-library-website-components` repository:

```bash
cd ucla-library-website-components

pnpm install
pnpm run build
```

---

### 2. Link the Nuxt Module into the Nuxt Application

From the `library-website-nuxt` repository:
This path /../../ucla-library-website-components/packages/ should be absolute or relative path to your component librray repo, You need to try what works for you locally

```bash
cd ../library-website-nuxt

pnpm link /../../ucla-library-website-components/packages/component-library-nuxt-module
```

This creates a symbolic link from the Nuxt application's `node_modules` to your local Nuxt module.

The Nuxt application will now use your local module instead of the published package from npm.

---

### 3. Verify the Link on the Nuxt Repo

Verify that the linked package is being used:

```bash
pnpm list @ucla-library/component-library-nuxt-module
```

Or verify that the package inside `node_modules` is a symbolic link:

```bash
ls -l node_modules/@ucla-library/component-library-nuxt-module
```

The output should point to your local package directory.

---

### 4. Make Changes and Test Them

After the link has been created:

1. Make changes to the Nuxt module or the component library.

2. From the `ucla-library-website-components` repository, rebuild the Nuxt module:

```bash
pnpm run build
```

3. Return to the `library-website-nuxt` repository.

4. If the Nuxt development server does not automatically pick up the changes, restart it:

```bash
pnpm dev
```

Repeat these steps as you continue development.

---

### 5. Return to the Published npm Package

When you are finished testing the local package:

1. Stop the Nuxt development server (`Ctrl+C`).

2. From the `library-website-nuxt` repository, unlink the local package:

```bash
pnpm unlink @ucla-library/component-library-nuxt-module
```

> **Tip:** Running `pnpm unlink` without specifying a package name removes **all** locally linked packages in the current project. If you have multiple linked packages, it is recommended to specify the package name so only the desired link is removed.

3. Restore the published package from npm:

```bash
pnpm install
```

4. Restart the development server:

```bash
pnpm dev
```

The Nuxt application will now use the published version of `@ucla-library/component-library-nuxt-module` from npm.

---

### Troubleshooting

#### Verify which package is being used

Run these commands from the `library-website-nuxt` repository:

```bash
pnpm list @ucla-library/component-library-nuxt-module
```

or

```bash
ls -l node_modules/@ucla-library/component-library-nuxt-module
```

The output should indicate whether the package is a symbolic link to your local package or the published package installed from npm.

---

#### Verify the active pnpm version

Run this command from either repository:

```bash
pnpm --version
```

Both repositories should report the version pinned in their respective `package.json` files.

---

#### Verify which pnpm executable is being used

Run this command from either repository:

```bash
which pnpm
```

This shows which `pnpm` executable is currently being used (for example, the Corepack-managed pnpm or a globally installed pnpm).

---

#### If the wrong pnpm version is active

From either repository, enable Corepack:

```bash
corepack enable
```

If necessary, switch to the version pinned in the current repository's `package.json`:

```bash
corepack use pnpm@<version>
```

Then verify the version:

```bash
pnpm --version
```

---

#### If changes to the linked package are not reflected

From the `ucla-library-website-components` repository, rebuild the Nuxt module:

```bash
pnpm --filter @ucla-library/component-library-nuxt-module build
```

Then, from the `library-website-nuxt` repository, restart the development server:

```bash
pnpm dev
```

If the problem persists, verify that the package is still linked using:

```bash
pnpm list @ucla-library/component-library-nuxt-module
```

or

```bash
ls -l node_modules/@ucla-library/component-library-nuxt-module
```

---

### Notes

- These instructions apply to **pnpm 11 and later**.
- `pnpm link` links a local package directory directly into your project's `node_modules`.
- The linked package is a symbolic link to your local source, allowing you to test changes without publishing to npm.
- After making changes to the Nuxt module, rebuild it before testing in the Nuxt application.
- If changes are not reflected, restart the Nuxt development server.
- When finished testing, always run `pnpm unlink` followed by `pnpm install` to restore the published package from npm.
- If you are using Corepack, ensure both repositories are using the pnpm version pinned in their respective `packageManager` fields.

## 📚 Additional Resources

[PNPM workspaces](https://pnpm.io/workspaces)
[PNPM catalogs](https://pnpm.io/catalogs)
[Semantic Release Documentation](https://semantic-release.gitbook.io/semantic-release/usage/configuration)
