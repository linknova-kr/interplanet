/**
 * @generated SignedSource<<58477dd742a422f0fa094b5bb1afe312>>
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
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    readonly __typename: "UserGroupProgram";
    readonly id: string;
    readonly message: string;
    readonly type: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
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
  "name": "message",
  "storageKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/),
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
v6 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
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
          (v2/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
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
          (v2/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
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
    "cacheID": "d09f80137fa229912b6b8b57887e2c14",
    "id": null,
    "metadata": {},
    "name": "UserGroupProgramFormModalUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation UserGroupProgramFormModalUpdateMutation(\n  $input: UpdateUserGroupProgramInput!\n  $where: UpdateUserGroupProgramWhere!\n) {\n  updateUserGroupProgram(input: $input, where: $where) {\n    __typename\n    ... on UserGroupProgram {\n      id\n      message\n      type\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "21bc6a0796fad70e9af267bd63bb8de1";

export default node;
