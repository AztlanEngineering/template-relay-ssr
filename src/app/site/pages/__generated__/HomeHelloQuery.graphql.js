/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeHelloQueryVariables = {||};
export type HomeHelloQueryResponse = {|
  +hello: ?string
|};
export type HomeHelloQuery = {|
  variables: HomeHelloQueryVariables,
  response: HomeHelloQueryResponse,
|};
*/


/*
query HomeHelloQuery {
  hello
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeHelloQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeHelloQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d70ab4598f61cd49034335ad4a502d17",
    "id": null,
    "metadata": {},
    "name": "HomeHelloQuery",
    "operationKind": "query",
    "text": "query HomeHelloQuery {\n  hello\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e768452537af6384ade953a8b6324992';

module.exports = node;
