To reproduce the compilation error, run `npm install && npm run build`.

You will then probably see output very similar to the following:

```
index.mts:3:14 - error TS2742: The inferred type of 'getValuesWithRemeda' cannot be named without a reference to './node_modules/remeda/dist/EnumerableStringKeyedValueOf-BU9R_cEk.js'. This is likely not portable. A type annotation is necessary.

3 export const getValuesWithRemeda = <T extends object, >(obj: T) =>
               ~~~~~~~~~~~~~~~~~~~

index.mts:3:14 - error TS2742: The inferred type of 'getValuesWithRemeda' cannot be named without a reference to './node_modules/remeda/dist/IterableContainer-CtfinwiH.js'. This is likely not portable. A type annotation is necessary.

3 export const getValuesWithRemeda = <T extends object, >(obj: T) =>
               ~~~~~~~~~~~~~~~~~~~


Found 2 errors in the same file, starting at: index.mts:3
```
