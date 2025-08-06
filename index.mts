import * as R from "remeda";

export const getValuesWithRemeda = <T extends Record<string, unknown>, >(record: T) =>
    R.values(record);

// For comparison, try uncommenting below; it compiles successfully!
/*
export const getValues = <T extends Record<string, unknown>, >(record: T) =>
    Object.values(record);
*/
