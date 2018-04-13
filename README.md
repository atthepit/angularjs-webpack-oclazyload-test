# AngularJS Lazy Loading with Webpack and ocLazyLoad

This app is a really simple example of how to lazy load modules with ocLazyLoad and Webpack dynamic imports.

The component structure is really simple.

```text
App
 |__ Mod1
 |__ Mod2
```

The App module defines two states `mod1.**` and `mod2.**`. uiRouter defines any state that ends with `.**` as a **future state**. In this future state you can define a **lazyLoad** function which receives a `$transition` object.
This function is only called once, when the state is entered the first time and is never called again. The function should return a promise that will complete the transition once is resolved.

In this function we can call Webpack's `import()` function to load the module we want. **import** returns a function that passes the module once it's loaded. We can then inject `$ocLazyLoad` and load `module.default` if we exported the module with `export default Mod1` or `module.Mod1` if we exported with `export const Mod1 = ...`.

Each module must then define it's own states, and one of them must have the same name (without the `.**`) and url so that, when we do `ui-sref=mod1` uiRouter knows how to resolve that state.

And that's all!

You can file an issue if you don't understand something or you can contact me on [twitter](https://twitter.com/mesmerismo)
