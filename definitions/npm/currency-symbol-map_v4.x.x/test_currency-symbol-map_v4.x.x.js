/* @flow */
import currencyToSymbolMap from "currency-symbol-map";

currencyToSymbolMap("USD");
currencyToSymbolMap("EGP");

// $ExpectError
const failType: number = currencyToSymbolMap("USD");
// $ExpectError
currencyToSymbolMap({});
// $ExpectError
currencyToSymbolMap("a", {});
