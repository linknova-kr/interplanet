/**
 * @generated SignedSource<<3b2852453b94b42dac79a8a70183cf3f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DepartmentChipsQuery$variables = Record<PropertyKey, never>;
export type DepartmentChipsQuery$data = {
  readonly departments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  };
};
export type DepartmentChipsQuery = {
  response: DepartmentChipsQuery$data;
  variables: DepartmentChipsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DepartmentConnection",
    "kind": "LinkedField",
    "name": "departments",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DepartmentEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Department",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
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
        ],
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
    "name": "DepartmentChipsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DepartmentChipsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bdd4354141e33dd11eb00bfe508d28f2",
    "id": null,
    "metadata": {},
    "name": "DepartmentChipsQuery",
    "operationKind": "query",
    "text": "query DepartmentChipsQuery {\n  departments {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4899c1d425cb1cf5eb06cf696e059e0e";

export default node;
