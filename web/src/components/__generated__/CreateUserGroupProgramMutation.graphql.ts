/**
 * @generated SignedSource<<5e01effd6bb4ca1656e687186a4df234>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserGroupProgramInput = {
  groupProgramId: string;
  message: string;
  type: string;
};
export type CreateUserGroupProgramMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateUserGroupProgramInput;
};
export type CreateUserGroupProgramMutation$data = {
  readonly createUserGroupProgram: {
    readonly groupProgram?: {
      readonly id: string;
      readonly my: {
        readonly id: string;
      } | null | undefined;
    };
    readonly id?: string;
    readonly message?: string;
    readonly user?: {
      readonly id: string;
      readonly nickname: string;
    };
  };
};
export type CreateUserGroupProgramMutation = {
  response: CreateUserGroupProgramMutation$data;
  variables: CreateUserGroupProgramMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
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
  "name": "message",
  "storageKey": null
},
v5 = [
  (v3/*: any*/)
],
v6 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        (v3/*: any*/),
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
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "GroupProgram",
      "kind": "LinkedField",
      "name": "groupProgram",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "UserGroupProgram",
          "kind": "LinkedField",
          "name": "my",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UserGroupProgram",
  "abstractKey": null
},
v7 = [
  (v4/*: any*/)
],
v8 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "AlreadyExistsError",
  "abstractKey": null
},
v9 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "NotFoundError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateUserGroupProgramMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createUserGroupProgram",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateUserGroupProgramMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createUserGroupProgram",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v6/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v5/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "appendNode",
        "key": "",
        "kind": "LinkedHandle",
        "name": "createUserGroupProgram",
        "handleArgs": [
          {
            "kind": "Variable",
            "name": "connections",
            "variableName": "connections"
          },
          {
            "kind": "Literal",
            "name": "edgeTypeName",
            "value": "UserGroupProgramEdge"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "cb52a67a06ec337c8ce7f6b83b56b6da",
    "id": null,
    "metadata": {},
    "name": "CreateUserGroupProgramMutation",
    "operationKind": "mutation",
    "text": "mutation CreateUserGroupProgramMutation(\n  $input: CreateUserGroupProgramInput!\n) {\n  createUserGroupProgram(input: $input) {\n    __typename\n    ... on UserGroupProgram {\n      id\n      user {\n        id\n        nickname\n      }\n      message\n      groupProgram {\n        id\n        my {\n          id\n        }\n      }\n    }\n    ... on AlreadyExistsError {\n      message\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c4cb7267770137e73f78b32449a27a1";

export default node;
