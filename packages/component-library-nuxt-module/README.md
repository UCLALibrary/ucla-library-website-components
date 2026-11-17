# UCLA Library Component Library Nuxt Module

This package exposes the UCLA Library Vue Component Library as a Nuxt module. It automatically registers all exported Vue components and injects the shared component library stylesheet into a Nuxt application.

## Package Layout

```
packages/
├── vue-component-library/          # Vue component library
└── component-library-nuxt-module/
    ├── src/                        # Nuxt module source
    ├── playground/                 # Manual development application
    └── test/fixtures/              # Automated test applications
```

---

# Prerequisites

Install dependencies from the monorepo root.

```bash
pnpm install
```

---

# Development Workflow

This package depends on the Vue component library package.

Whenever you make changes to the Vue component library, rebuild the workspace first.

From the **monorepo root**:

```bash
pnpm run build
```

This builds:

- `packages/vue-component-library`
- `packages/component-library-nuxt-module`

and refreshes the workspace links between both packages.

---

# Running the Playground

The playground is a real Nuxt application used for manual development.

Start it from the **monorepo root**:

```bash
pnpm run nuxt-module:prepare
pnpm run nuxt-module:dev
```

Normally you only need to run `nuxt-module:prepare` after:

- installing dependencies
- changing Nuxt configuration
- deleting `.nuxt`

During normal development you can usually just run:

```bash
pnpm run nuxt-module:dev
```

---

# Building the Playground

To verify that the playground builds successfully as a production Nuxt application:

```bash
pnpm --filter @ucla-library/component-library-nuxt-module run dev:build
```

Use this before opening a PR or when investigating production-only issues.

This is **not** part of the normal development workflow.

---

# Building the Module

To build the publishable Nuxt module:

```bash
pnpm run nuxt-module:build
```

This runs the module's `prepack` script and produces the distributable package in:

```
packages/component-library-nuxt-module/dist/
```

Normally you only run this when verifying the package before publishing.

---

# Testing

There are two ways to test the module.

## Playground

The playground is intended for manual testing.

Use it to verify:

- components auto-import correctly
- CSS is loaded
- components render correctly
- module configuration behaves correctly
- browser behaviour

The playground loads the module from source:

```ts
modules: ["@radya/nuxt-dompurify", "../src/module"];
```

---

## Test Fixtures

The fixtures are used by `@nuxt/test-utils`.

Unlike the playground, they create a minimal Nuxt application specifically for automated tests.

Example:

```ts
import MyModule from "../../../src/module";

export default defineNuxtConfig({
  modules: [MyModule],
});
```

Use fixtures for:

- integration tests
- automated testing
- module installation tests

---

# Common Commands

Run all commands from the **monorepo root**.

| Task                 | Command                                                                    |
| -------------------- | -------------------------------------------------------------------------- |
| Install dependencies | `pnpm install`                                                             |
| Build workspace      | `pnpm run build`                                                           |
| Prepare playground   | `pnpm run nuxt-module:prepare`                                             |
| Start playground     | `pnpm run nuxt-module:dev`                                                 |
| Build module         | `pnpm run nuxt-module:build`                                               |
| Run tests            | `pnpm --filter @ucla-library/component-library-nuxt-module run test`       |
| Type check           | `pnpm --filter @ucla-library/component-library-nuxt-module run test:types` |

---

# Gotchas

## Always build the workspace first

If you modify the Vue component library, run:

```bash
pnpm run build
```

before testing the Nuxt module.

The module depends on the built output of the Vue component library.

---

## Playground vs Test Fixtures

These are different environments.

| Playground            | Test Fixtures            |
| --------------------- | ------------------------ |
| Manual development    | Automated tests          |
| Browser testing       | Integration testing      |
| Full Nuxt application | Minimal Nuxt application |
| Interactive           | Non-interactive          |

---

## Publishing

Publishing is handled by GitHub Actions.

During publishing, `pnpm publish` automatically runs the module's `prepack` script to build the distributable package before it is published.
