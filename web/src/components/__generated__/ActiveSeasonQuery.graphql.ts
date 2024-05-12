/**
 * @generated SignedSource<<1c61104970ef993b5f3ba808be9295b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UserSeasonDepartmentGroupStatus = "APPROVAL_PENDING" | "APPROVED" | "REFUNDED" | "REFUND_PENDING" | "%future added value";
export type ActiveSeasonQuery$variables = Record<PropertyKey, never>;
export type ActiveSeasonQuery$data = {
  readonly activeSeason: {
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    readonly __typename: "Season";
    readonly endsAt: any;
    readonly id: string;
    readonly name: string;
    readonly seasonDepartments: ReadonlyArray<{
      readonly department: {
        readonly name: string;
      };
      readonly id: string;
      readonly message: string;
      readonly my: {
        readonly id: string;
        readonly status: UserSeasonDepartmentGroupStatus;
      } | null | undefined;
    }>;
    readonly startsAt: any;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type ActiveSeasonQuery = {
  response: ActiveSeasonQuery$data;
  variables: ActiveSeasonQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startsAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endsAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "UserSeasonDepartmentGroup",
  "kind": "LinkedField",
  "name": "my",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "NotFoundError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ActiveSeasonQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "activeSeason",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SeasonDepartment",
                "kind": "LinkedField",
                "name": "seasonDepartments",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Department",
                    "kind": "LinkedField",
                    "name": "department",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Season",
            "abstractKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ActiveSeasonQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "activeSeason",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SeasonDepartment",
                "kind": "LinkedField",
                "name": "seasonDepartments",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Department",
                    "kind": "LinkedField",
                    "name": "department",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Season",
            "abstractKey": null
          },
          (v7/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/)
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
    "cacheID": "37615043cea57f5ea6c246e0c1bee876",
    "id": null,
    "metadata": {},
    "name": "ActiveSeasonQuery",
    "operationKind": "query",
    "text": "query ActiveSeasonQuery {\n  activeSeason {\n    __typename\n    ... on Season {\n      id\n      name\n      startsAt\n      endsAt\n      seasonDepartments {\n        id\n        message\n        department {\n          name\n          id\n        }\n        my {\n          id\n          status\n        }\n      }\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "773e624c5de1d8df67e333e77870dad3";

export default node;
