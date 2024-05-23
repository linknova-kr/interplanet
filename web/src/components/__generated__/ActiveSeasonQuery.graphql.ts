/**
 * @generated SignedSource<<18161a9a3c9edc83a2eb76c0231a8e71>>
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
        readonly attendanceCount: number;
        readonly id: string;
        readonly seasonGroup: {
          readonly group: {
            readonly name: string;
          };
        };
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
v6 = [
  (v2/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "attendanceCount",
  "storageKey": null
},
v9 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "NotFoundError",
  "abstractKey": null
},
v10 = [
  (v2/*: any*/),
  (v1/*: any*/)
];
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
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserSeasonDepartmentGroup",
                    "kind": "LinkedField",
                    "name": "my",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SeasonGroup",
                        "kind": "LinkedField",
                        "name": "seasonGroup",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Group",
                            "kind": "LinkedField",
                            "name": "group",
                            "plural": false,
                            "selections": (v6/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Season",
            "abstractKey": null
          },
          (v9/*: any*/)
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
                    "selections": (v10/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserSeasonDepartmentGroup",
                    "kind": "LinkedField",
                    "name": "my",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SeasonGroup",
                        "kind": "LinkedField",
                        "name": "seasonGroup",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Group",
                            "kind": "LinkedField",
                            "name": "group",
                            "plural": false,
                            "selections": (v10/*: any*/),
                            "storageKey": null
                          },
                          (v1/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Season",
            "abstractKey": null
          },
          (v9/*: any*/),
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
    "cacheID": "ae2694638b77ea78fe2b09502ddca10f",
    "id": null,
    "metadata": {},
    "name": "ActiveSeasonQuery",
    "operationKind": "query",
    "text": "query ActiveSeasonQuery {\n  activeSeason {\n    __typename\n    ... on Season {\n      id\n      name\n      startsAt\n      endsAt\n      seasonDepartments {\n        id\n        message\n        department {\n          name\n          id\n        }\n        my {\n          id\n          status\n          seasonGroup {\n            group {\n              name\n              id\n            }\n            id\n          }\n          attendanceCount\n        }\n      }\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0ee68f19b0195e3aabcce3cf14b46616";

export default node;
