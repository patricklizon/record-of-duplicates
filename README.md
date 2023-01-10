# problem-solving-env &middot;

Simple environment for solving coding challenges.

## Table of content

* [Stack](#stack)
* [Prerequisites](#prerequisites)
* [Setup](#setup)
* [Scripts](#scripts)

## Stack

* [TypeScript](https://www.typescriptlang.org/) - typed language build on top of JavaScript

## Tools

* [vitest](https://vitest.dev/) - test framework
* [eslint](https://eslint.org) - static code analysis
* [prettier](https://prettier.io) - code formatter

## Prerequisites

* [Node](https://nodejs.org/en/) - version specified in [.nvmrc](/.nvmrc) file.
* [npm](https://www.npmjs.com/) - usually comes with node.

_It's recommended to use node version manger (ie. [fnm](https://github.com/Schniz/fnm)), for easier switching between different projects._

## Setup

```sh
# Install dependencies
npm ci

# Start tests in watch mode
npm run test:watch
```

## Scripts

Summary of defined npm scripts.

### Test

| Script          | Description                   |
| --------------- | ----------------------------- |
| `test:run`      | run tests                     |
| `test`          | run tests in watch mode       |
| `test:types`    | validates TS types            |
| `test:format`   | validates code formatting     |
| `test:lint`     | validates linting rules       |

### Fix

| Script       | Description                |
| ------------ | -------------------------- |
| `fix:format` | tries to fix formatting    |
| `fix:lint`   | tries to fix linter issues |
