/**
 * @generated SignedSource<<839660be182eadc3c42dac4ecc9bd348>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SeasonDepartmentPageQuery$variables = {
  id: string;
};
export type SeasonDepartmentPageQuery$data = {
  readonly seasonDepartment: {
    readonly department?: {
      readonly id: string;
      readonly name: string;
    };
    readonly id?: string;
    readonly message?: string;
    readonly season?: {
      readonly endsAt: any;
      readonly id: string;
      readonly name: string;
      readonly startsAt: any;
    };
  };
};
export type SeasonDepartmentPageQuery = {
  response: SeasonDepartmentPageQuery$data;
  variables: SeasonDepartmentPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "NotFoundError",
  "abstractKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Season",
      "kind": "LinkedField",
      "name": "season",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startsAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endsAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Department",
      "kind": "LinkedField",
      "name": "department",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "SeasonDepartment",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SeasonDepartmentPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "seasonDepartment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SeasonDepartmentPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "seasonDepartment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e61ea5a961780e3518069873592ea4cd",
    "id": null,
    "metadata": {},
    "name": "SeasonDepartmentPageQuery",
    "operationKind": "query",
    "text": "query SeasonDepartmentPageQuery(\n  $id: ID!\n) {\n  seasonDepartment(id: $id) {\n    __typename\n    ... on NotFoundError {\n      message\n    }\n    ... on SeasonDepartment {\n      id\n      season {\n        id\n        name\n        startsAt\n        endsAt\n      }\n      department {\n        id\n        name\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "490b3958598b01086c971250de066167";

export default node;
