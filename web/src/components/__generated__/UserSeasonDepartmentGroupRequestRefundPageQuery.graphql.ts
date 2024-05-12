/**
 * @generated SignedSource<<2428492a7f3a2b9321876c2782f2de04>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UserSeasonDepartmentGroupRequestRefundPageQuery$variables = {
  id: string;
};
export type UserSeasonDepartmentGroupRequestRefundPageQuery$data = {
  readonly userSeasonDepartmentGroup: {
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    readonly __typename: "UserSeasonDepartmentGroup";
    readonly id: string;
    readonly seasonDepartment: {
      readonly department: {
        readonly name: string;
      };
      readonly season: {
        readonly endsAt: any;
        readonly name: string;
        readonly startsAt: any;
      };
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type UserSeasonDepartmentGroupRequestRefundPageQuery = {
  response: UserSeasonDepartmentGroupRequestRefundPageQuery$data;
  variables: UserSeasonDepartmentGroupRequestRefundPageQuery$variables;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startsAt",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endsAt",
  "storageKey": null
},
v7 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserSeasonDepartmentGroupRequestRefundPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "userSeasonDepartmentGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SeasonDepartment",
                "kind": "LinkedField",
                "name": "seasonDepartment",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Department",
                    "kind": "LinkedField",
                    "name": "department",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Season",
                    "kind": "LinkedField",
                    "name": "season",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "UserSeasonDepartmentGroup",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserSeasonDepartmentGroupRequestRefundPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "userSeasonDepartmentGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SeasonDepartment",
                "kind": "LinkedField",
                "name": "seasonDepartment",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Department",
                    "kind": "LinkedField",
                    "name": "department",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Season",
                    "kind": "LinkedField",
                    "name": "season",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v4/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "UserSeasonDepartmentGroup",
            "abstractKey": null
          },
          (v7/*: any*/),
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
    "cacheID": "74af51ffd4cf27d6f496b124737ae106",
    "id": null,
    "metadata": {},
    "name": "UserSeasonDepartmentGroupRequestRefundPageQuery",
    "operationKind": "query",
    "text": "query UserSeasonDepartmentGroupRequestRefundPageQuery(\n  $id: ID!\n) {\n  userSeasonDepartmentGroup(id: $id) {\n    __typename\n    ... on UserSeasonDepartmentGroup {\n      id\n      seasonDepartment {\n        department {\n          name\n          id\n        }\n        season {\n          startsAt\n          endsAt\n          name\n          id\n        }\n        id\n      }\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7aa6b6f3e67b27b50b1e18875089de66";

export default node;
