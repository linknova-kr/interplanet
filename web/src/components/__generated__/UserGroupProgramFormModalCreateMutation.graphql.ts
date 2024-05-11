/**
 * @generated SignedSource<<88e21b8584f5af53216759ac1267b6b0>>
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
export type UserGroupProgramFormModalCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateUserGroupProgramInput;
};
export type UserGroupProgramFormModalCreateMutation$data = {
  readonly createUserGroupProgram: {
    readonly groupProgram?: {
      readonly id: string;
      readonly my: {
        readonly id: string;
      } | null | undefined;
    };
    readonly id?: string;
    readonly message?: string;
    readonly type?: string;
    readonly user?: {
      readonly id: string;
      readonly nickname: string;
    };
  };
};
export type UserGroupProgramFormModalCreateMutation = {
  response: UserGroupProgramFormModalCreateMutation$data;
  variables: UserGroupProgramFormModalCreateMutation$variables;
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
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
    "name": "UserGroupProgramFormModalCreateMutation",
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
    "name": "UserGroupProgramFormModalCreateMutation",
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
    "cacheID": "9eabce13bc2160780521353d03b812cf",
    "id": null,
    "metadata": {},
    "name": "UserGroupProgramFormModalCreateMutation",
    "operationKind": "mutation",
    "text": "mutation UserGroupProgramFormModalCreateMutation(\n  $input: CreateUserGroupProgramInput!\n) {\n  createUserGroupProgram(input: $input) {\n    __typename\n    ... on UserGroupProgram {\n      id\n      user {\n        id\n        nickname\n      }\n      type\n      message\n      groupProgram {\n        id\n        my {\n          id\n        }\n      }\n    }\n    ... on AlreadyExistsError {\n      message\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f72a8834ae11706b963d48f12ec1cf0a";

export default node;
