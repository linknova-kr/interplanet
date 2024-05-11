/**
 * @generated SignedSource<<32c9f4b5ff88207cfa843c192ecc9012>>
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
  input: CreateUserGroupProgramInput;
};
export type CreateUserGroupProgramMutation$data = {
  readonly createUserGroupProgram: {
    readonly id?: string;
    readonly message?: string;
  };
};
export type CreateUserGroupProgramMutation = {
  response: CreateUserGroupProgramMutation$data;
  variables: CreateUserGroupProgramMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v3 = {
  "kind": "InlineFragment",
  "selections": (v2/*: any*/),
  "type": "UserGroupProgram",
  "abstractKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v5 = {
  "kind": "InlineFragment",
  "selections": (v4/*: any*/),
  "type": "AlreadyExistsError",
  "abstractKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": (v4/*: any*/),
  "type": "NotFoundError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateUserGroupProgramMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createUserGroupProgram",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
    "name": "CreateUserGroupProgramMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
          (v3/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v2/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1f777a744f2984ca323fedf5f0cd7efe",
    "id": null,
    "metadata": {},
    "name": "CreateUserGroupProgramMutation",
    "operationKind": "mutation",
    "text": "mutation CreateUserGroupProgramMutation(\n  $input: CreateUserGroupProgramInput!\n) {\n  createUserGroupProgram(input: $input) {\n    __typename\n    ... on UserGroupProgram {\n      id\n    }\n    ... on AlreadyExistsError {\n      message\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "749a7dca2ef07d930c0f29c18bbb5d3f";

export default node;
