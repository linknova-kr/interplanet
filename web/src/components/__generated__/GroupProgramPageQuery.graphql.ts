/**
 * @generated SignedSource<<a3411781dddd4f72d5294e92f003d6bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupProgramPageQuery$variables = {
  id: string;
};
export type GroupProgramPageQuery$data = {
  readonly groupProgram: {
    readonly description?: string;
    readonly endsAt?: any;
    readonly id?: string;
    readonly message?: string;
    readonly my?: {
      readonly id: string;
    } | null | undefined;
    readonly startsAt?: any;
    readonly userGroupPrograms?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly message: string;
          readonly user: {
            readonly id: string;
            readonly nickname: string;
          };
        };
      }>;
    };
    readonly " $fragmentSpreads": FragmentRefs<"GroupProgramHeaderFragment">;
  };
};
export type GroupProgramPageQuery = {
  response: GroupProgramPageQuery$data;
  variables: GroupProgramPageQuery$variables;
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
  "name": "id",
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
v5 = [
  (v2/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "UserGroupProgram",
  "kind": "LinkedField",
  "name": "my",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserGroupProgramEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserGroupProgram",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nickname",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          (v9/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v11 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/)
  ],
  "type": "NotFoundError",
  "abstractKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 30
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupProgramPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "groupProgram",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": "userGroupPrograms",
                "args": null,
                "concreteType": "UserGroupProgramConnection",
                "kind": "LinkedField",
                "name": "__GroupProgram_userGroupPrograms_connection",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GroupProgramHeaderFragment"
              }
            ],
            "type": "GroupProgram",
            "abstractKey": null
          },
          (v11/*: any*/)
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
    "name": "GroupProgramPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "groupProgram",
        "plural": false,
        "selections": [
          (v9/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "UserGroupProgramConnection",
                "kind": "LinkedField",
                "name": "userGroupPrograms",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": "userGroupPrograms(first:30)"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "GroupProgram_userGroupPrograms",
                "kind": "LinkedHandle",
                "name": "userGroupPrograms"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "address",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Group",
                "kind": "LinkedField",
                "name": "group",
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "GroupProgram",
            "abstractKey": null
          },
          (v11/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v5/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "988d1e6b50e697c2cdab70e947883fd1",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "groupProgram",
            "userGroupPrograms"
          ]
        }
      ]
    },
    "name": "GroupProgramPageQuery",
    "operationKind": "query",
    "text": "query GroupProgramPageQuery(\n  $id: ID!\n) {\n  groupProgram(id: $id) {\n    __typename\n    ... on GroupProgram {\n      id\n      startsAt\n      endsAt\n      my {\n        id\n      }\n      description\n      userGroupPrograms(first: 30) {\n        edges {\n          node {\n            id\n            user {\n              id\n              nickname\n            }\n            message\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      ...GroupProgramHeaderFragment\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment GroupProgramHeaderFragment on GroupProgram {\n  id\n  title\n  startsAt\n  address\n  group {\n    department {\n      name\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "90daf5c194c3c354133011e46c53003b";

export default node;
