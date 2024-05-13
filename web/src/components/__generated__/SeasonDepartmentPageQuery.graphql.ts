/**
 * @generated SignedSource<<ce6fd8bf63353e506f55d8370983714d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DepartmentType = "BOOK" | "ENGLISH" | "FOUNDER" | "%future added value";
export type UserSeasonDepartmentGroupStatus = "APPROVAL_PENDING" | "APPROVED" | "REFUNDED" | "REFUND_PENDING" | "%future added value";
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
      readonly slug: string;
      readonly type: DepartmentType;
    };
    readonly id: string;
    readonly my: {
      readonly id: string;
      readonly status: UserSeasonDepartmentGroupStatus;
    } | null | undefined;
    readonly season: {
      readonly endsAt: any;
      readonly id: string;
      readonly name: string;
      readonly startsAt: any;
    };
    readonly seasonGroups: ReadonlyArray<{
      readonly group: {
        readonly name: string;
      };
      readonly id: string;
    }>;
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
  "concreteType": "UserSeasonDepartmentGroup",
  "kind": "LinkedField",
  "name": "my",
  "plural": false,
  "selections": [
    (v4/*: any*/),
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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Season",
  "kind": "LinkedField",
  "name": "season",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v6/*: any*/),
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
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Department",
  "kind": "LinkedField",
  "name": "department",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "storageKey": null
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SeasonGroup",
                "kind": "LinkedField",
                "name": "seasonGroups",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Group",
                    "kind": "LinkedField",
                    "name": "group",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "SeasonDepartment",
            "abstractKey": null
          }
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SeasonGroup",
                "kind": "LinkedField",
                "name": "seasonGroups",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Group",
                    "kind": "LinkedField",
                    "name": "group",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "SeasonDepartment",
            "abstractKey": null
          },
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
    "cacheID": "bbfc13652591c3ca7c5f545cf89cc1c1",
    "id": null,
    "metadata": {},
    "name": "SeasonDepartmentPageQuery",
    "operationKind": "query",
    "text": "query SeasonDepartmentPageQuery(\n  $id: ID!\n) {\n  seasonDepartment(id: $id) {\n    __typename\n    ... on NotFoundError {\n      message\n    }\n    ... on SeasonDepartment {\n      id\n      my {\n        id\n        status\n      }\n      season {\n        id\n        name\n        startsAt\n        endsAt\n      }\n      department {\n        id\n        name\n        slug\n        type\n      }\n      seasonGroups {\n        id\n        group {\n          name\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "afad4d27322e5b9466355154bcd1d0ec";

export default node;
