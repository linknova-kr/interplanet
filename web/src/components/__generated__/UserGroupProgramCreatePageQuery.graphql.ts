/**
 * @generated SignedSource<<80482dc6abcc61113f7db5b0cd222823>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupProgramType = "BOOK_DESIGNATED" | "BOOK_FREE" | "ENGLISH" | "FOUNDER" | "%future added value";
export type UserGroupProgramCreatePageQuery$variables = {
  id: string;
};
export type UserGroupProgramCreatePageQuery$data = {
  readonly groupProgram: {
    readonly id?: string;
    readonly message?: string;
    readonly my?: {
      readonly id: string;
    } | null | undefined;
    readonly type?: GroupProgramType;
    readonly " $fragmentSpreads": FragmentRefs<"GroupProgramHeaderFragment">;
  };
};
export type UserGroupProgramCreatePageQuery = {
  response: UserGroupProgramCreatePageQuery$data;
  variables: UserGroupProgramCreatePageQuery$variables;
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
  "name": "type",
  "storageKey": null
},
v4 = [
  (v2/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "UserGroupProgram",
  "kind": "LinkedField",
  "name": "my",
  "plural": false,
  "selections": (v4/*: any*/),
  "storageKey": null
},
v6 = {
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
    "name": "UserGroupProgramCreatePageQuery",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GroupProgramHeaderFragment"
              },
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/)
            ],
            "type": "GroupProgram",
            "abstractKey": null
          },
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
    "name": "UserGroupProgramCreatePageQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
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
                "name": "startsAt",
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
              },
              (v3/*: any*/),
              (v5/*: any*/)
            ],
            "type": "GroupProgram",
            "abstractKey": null
          },
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v4/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "17edcbbf76ed6ddd27e86894deddb799",
    "id": null,
    "metadata": {},
    "name": "UserGroupProgramCreatePageQuery",
    "operationKind": "query",
    "text": "query UserGroupProgramCreatePageQuery(\n  $id: ID!\n) {\n  groupProgram(id: $id) {\n    __typename\n    ... on GroupProgram {\n      ...GroupProgramHeaderFragment\n      id\n      type\n      my {\n        id\n      }\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment GroupProgramHeaderFragment on GroupProgram {\n  id\n  title\n  startsAt\n  address\n  group {\n    department {\n      name\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9d763cf276310e6b40949f21145f5d71";

export default node;
