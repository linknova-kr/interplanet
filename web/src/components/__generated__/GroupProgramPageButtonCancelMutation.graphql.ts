/**
 * @generated SignedSource<<5dbea524798581f257dcf2366b2e30ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CancelUserGroupProgramInput = {
  id: string;
};
export type GroupProgramPageButtonCancelMutation$variables = {
  input: CancelUserGroupProgramInput;
};
export type GroupProgramPageButtonCancelMutation$data = {
  readonly cancelUserGroupProgram: {
    readonly id?: string;
    readonly message?: string;
  };
};
export type GroupProgramPageButtonCancelMutation = {
  response: GroupProgramPageButtonCancelMutation$data;
  variables: GroupProgramPageButtonCancelMutation$variables;
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
v4 = {
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
    "name": "GroupProgramPageButtonCancelMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "cancelUserGroupProgram",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "GroupProgramPageButtonCancelMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "cancelUserGroupProgram",
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
          (v4/*: any*/),
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
    "cacheID": "344090142cef9ddabaaf4fc41432b44d",
    "id": null,
    "metadata": {},
    "name": "GroupProgramPageButtonCancelMutation",
    "operationKind": "mutation",
    "text": "mutation GroupProgramPageButtonCancelMutation(\n  $input: CancelUserGroupProgramInput!\n) {\n  cancelUserGroupProgram(input: $input) {\n    __typename\n    ... on UserGroupProgram {\n      id\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "04d6599237a842ff936989236783da76";

export default node;
