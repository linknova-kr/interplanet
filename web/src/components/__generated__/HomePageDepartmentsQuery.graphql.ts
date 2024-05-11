/**
 * @generated SignedSource<<e660b4ca1cf551e6eab9e32ecdbd3d3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomePageDepartmentsQuery$variables = Record<PropertyKey, never>;
export type HomePageDepartmentsQuery$data = {
  readonly departments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  };
};
export type HomePageDepartmentsQuery = {
  response: HomePageDepartmentsQuery$data;
  variables: HomePageDepartmentsQuery$variables;
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
    "name": "HomePageDepartmentsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageDepartmentsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d298ca15a575cd02d03f113447133b88",
    "id": null,
    "metadata": {},
    "name": "HomePageDepartmentsQuery",
    "operationKind": "query",
    "text": "query HomePageDepartmentsQuery {\n  departments {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9a25960b4802eff4282dcb38a77cd2c4";

export default node;
