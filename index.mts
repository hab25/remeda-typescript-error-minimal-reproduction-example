import * as R from "remeda";

export const getValuesWithRemeda = <T extends object, >(obj: T) =>
    R.values(obj);

// For comparison, try uncommenting below; these compile successfully!
/*
export const remedaValues = R.values;

export const getValues = <T extends object, >(obj: T) =>
    Object.values(obj);
*/
