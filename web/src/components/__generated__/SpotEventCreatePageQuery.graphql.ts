/**
 * @generated SignedSource<<a25d2ccbd066089f9559d99a62b80656>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SpotEventCreatePageQuery$variables = Record<PropertyKey, never>;
export type SpotEventCreatePageQuery$data = {
  readonly myActiveDepartments: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }>;
};
export type SpotEventCreatePageQuery = {
  response: SpotEventCreatePageQuery$data;
  variables: SpotEventCreatePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Department",
    "kind": "LinkedField",
    "name": "myActiveDepartments",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SpotEventCreatePageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SpotEventCreatePageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3719b24326e332c3778f1e7b8acf28b6",
    "id": null,
    "metadata": {},
    "name": "SpotEventCreatePageQuery",
    "operationKind": "query",
    "text": "query SpotEventCreatePageQuery {\n  myActiveDepartments {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "47fe7b7fb0d3a70b87c8043f82dc4d8f";

export default node;
