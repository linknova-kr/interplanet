/**
 * @generated SignedSource<<d6a5a43b318b14c455e9796dcb5765a9>>
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
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    readonly __typename: "SeasonDepartment";
    readonly department: {
      readonly id: string;
      readonly name: string;
    };
    readonly id: string;
    readonly season: {
      readonly endsAt: any;
      readonly id: string;
      readonly name: string;
      readonly startsAt: any;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Season",
      "kind": "LinkedField",
      "name": "season",
      "plural": false,
      "selections": [
        (v4/*: any*/),
        (v5/*: any*/),
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
        (v4/*: any*/),
        (v5/*: any*/)
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
          (v3/*: any*/),
          (v6/*: any*/)
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/)
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

(node as any).hash = "1709557bf6f5b633c315b664b0aad99b";

export default node;
