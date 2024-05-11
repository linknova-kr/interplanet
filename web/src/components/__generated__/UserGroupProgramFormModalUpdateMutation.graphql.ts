/**
 * @generated SignedSource<<d644771160724f16e2d30f6b15543af6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserGroupProgramInput = {
  message: string;
  type: string;
};
export type UpdateUserGroupProgramWhere = {
  id: string;
};
export type UserGroupProgramFormModalUpdateMutation$variables = {
  input: UpdateUserGroupProgramInput;
  where: UpdateUserGroupProgramWhere;
};
export type UserGroupProgramFormModalUpdateMutation$data = {
  readonly updateUserGroupProgram: {
    readonly id?: string;
    readonly message?: string;
    readonly type?: string;
  };
};
export type UserGroupProgramFormModalUpdateMutation = {
  response: UserGroupProgramFormModalUpdateMutation$data;
  variables: UserGroupProgramFormModalUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
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
  "name": "message",
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "type": "UserGroupProgram",
  "abstractKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/)
  ],
  "type": "NotFoundError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGroupProgramFormModalUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateUserGroupProgram",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserGroupProgramFormModalUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateUserGroupProgram",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
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
    "cacheID": "d09f80137fa229912b6b8b57887e2c14",
    "id": null,
    "metadata": {},
    "name": "UserGroupProgramFormModalUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation UserGroupProgramFormModalUpdateMutation(\n  $input: UpdateUserGroupProgramInput!\n  $where: UpdateUserGroupProgramWhere!\n) {\n  updateUserGroupProgram(input: $input, where: $where) {\n    __typename\n    ... on UserGroupProgram {\n      id\n      message\n      type\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ed1cf1097ee411b9f3bcbc28f0a7ce22";

export default node;
