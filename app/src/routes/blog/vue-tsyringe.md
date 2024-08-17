---
title: Using Dependency Injection in Vue3 + Vite with Tsyringe
createdAt: '17/08/2024'
---

## Introduction

When you create a class, it often depends on other classes. For example, for a Web server, you can have controllers that depend on services and those services themselves depend on repositories. Thus, if we want to use our controller, we have to provide it a service and to do so, we have to provide the service a repository... You get the idea !

One solution to this problem is [Dependency Injection (DI)](https://en.wikipedia.org/wiki/Dependency_injection). With dependency injection, I only have to add the dependencies to the constructor of the class I am writing and they are automatically provided. I don't have to create them, to worry about leakage or anything ! This is like magic ! As a plus, it makes it very easy to manage your classes' lifecycles. You need a singleton, register your class as a singleton ! You need a new instance each time, register your class with a factory !

## My experience with DI

I discovered DI with backends written with statically typed programming languages, namely .NET Core with C# and Spring Boot with Java. With those technologies, you have to write interfaces, which may seem like more work, but also allows to change the implementations easily and really decouple classes from their dependencies.

I have gotten used to using DI so much that I now use it in almost all my projects, even though I am not coding with a statically typed language.

> Note: I even wrote a DI library for Python called [taipan-di](https://github.com/Billuc/Taipan-DI)

As a lot of my projects lately involve some frontend framework, I had to find a JS or TS library for that. At that time I was working on the project [Muninn](https://billuc.github.io/Muninn). I knew that Angular had its own DI mechanism implemented, but Muninn uses Vue3. A library we used at a company I used to work at was [tsyringe](https://github.com/microsoft/tsyringe). This library is very powerful and very pratical since it relies on decorators to register or mark classes as injectable. Here is how I integrated tsyringe into my Vue3 project.

## Integrating Tsyringe

This part is adapted from [this blog](https://medium.com/@mohamed.ma872/a-step-by-step-guide-to-using-tsyringe-for-dependency-injection-in-typescript-842443bcd24f). The tutorial is meant for Node.JS, but the procedure is similar for Vue, just slightly modified to fit our setup.

First, create your Vue + Vite project

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest vue-vite-tsyringe -- --template vue-ts
```

Then, install the dependencies

```bash
npm install tsyringe
npm install --save-dev typescript reflect-metadata @rollup/plugin-typescript
```

> `reflect-metadata` is a dependency that allows us to use decorators. In more details it is a polyfill that provides the Reflect API.

> `@rollup/plugin-typescript` is a plugin for Rollup (which is the bundler used by Vite under the hood). This is a crucial dependency to make tsyringe work with Vite as Rollup does not support decorators by default.

Next, add those properties to the `tsconfig.json` file

```json
{
    "compilerOptions": {
        ...
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
    }
}
```

These properties are here to help with decorators.

Modify the `vite.config.ts` file to use the Rollup plugin

```ts
...
import rollupTypescript from "@rollup/plugin-typescript";

export default defineConfig({
    plugins: [
        vue(),
        rollupTypescript(),
        ...
    ],
    ...
})
```

> Note that the rollupTypescript plugin has to be in second position -right after the vue plugin- in order for this to work !

Finally, import the Reflect polyfill in the `main.ts` file.

```ts
import "reflect-metadata";
...
```

<!-- ## My way of using it in Vue -->

## Conclusion

Here is how I setup my project to work with dependency injection in Vue and Vite. This should allow you to create Vue components in a more modular way with more streamlined development cycles.

Feel free to experiment with that and to give me your feedback.
