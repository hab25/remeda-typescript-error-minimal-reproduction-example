import * as R from "remeda";

export const getValuesWithRemeda = <T extends object, >(obj: T) =>
    R.values(obj);

// Uncommenting this makes the error go away
/*
import type { E } from './node_modules/remeda/dist/EnumerableStringKeyedValueOf-BU9R_cEk.js';
import type { I } from './node_modules/remeda/dist/IterableContainer-CtfinwiH.d.ts';
*/

// For comparison, try uncommenting; this compiles successfully!
/*
export const remedaValues = R.values;

export const getValues = <T extends object, >(obj: T) =>
    Object.values(obj);
*/
