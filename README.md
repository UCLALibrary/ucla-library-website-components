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

#### Run Percy Checks (Visual Regression)

- Percy runs automatically when merged into main.
- For manual Percy checks:
  1. Visit the GitHub Actions tab.
  2. Run the "Percy" workflow manually.
- Percy checks run in CI/CD after merging into main.

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

- Run Percy checks.
- Perform a release using semantic-release.
- Publish the package using pnpm publish.

## 📥 Usage in Nuxt Projects as a vue component library

### Installation

```
pnpm add --save-dev @ucla-library-monorepo/ucla-library-website-components or pnpm install @ucla-library-monorepo/ucla-library-website-components --save-dev
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

2. Using pnpm link for Local Development

- To link your component library locally in a Nuxt project:

```
pnpm run lib:build
cd packages/vue-component-library
pnpm link --global
cd ../your-nuxt-project
pnpm link @ucla-library/ucla-library-website-components
```

or

```
pnpm run lib:build
cd ../your-nuxt-project
code .
open package.json
"@ucla-library-monorepo/ucla-library-website-components": "file:/Users/[path to]/ucla-library-website-components/packages/vue-component-library"
```

## 📚 Additional Resources

[PNPM workspaces](https://pnpm.io/workspaces)
[PNPM catalogs](https://pnpm.io/catalogs)
[Semantic Release Documentation](https://semantic-release.gitbook.io/semantic-release/usage/configuration)
