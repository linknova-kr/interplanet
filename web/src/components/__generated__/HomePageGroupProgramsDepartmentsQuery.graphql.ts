/**
 * @generated SignedSource<<0456e8bd990e150de9e52c27249689f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomePageGroupProgramsDepartmentsQuery$variables = Record<PropertyKey, never>;
export type HomePageGroupProgramsDepartmentsQuery$data = {
  readonly departments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  };
};
export type HomePageGroupProgramsDepartmentsQuery = {
  response: HomePageGroupProgramsDepartmentsQuery$data;
  variables: HomePageGroupProgramsDepartmentsQuery$variables;
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
    "name": "HomePageGroupProgramsDepartmentsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageGroupProgramsDepartmentsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2674e396b9277e357f8ccef8e6de27f4",
    "id": null,
    "metadata": {},
    "name": "HomePageGroupProgramsDepartmentsQuery",
    "operationKind": "query",
    "text": "query HomePageGroupProgramsDepartmentsQuery {\n  departments {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "49e8269bcc6ded9a6e0dc8bc9da4ee70";

export default node;
