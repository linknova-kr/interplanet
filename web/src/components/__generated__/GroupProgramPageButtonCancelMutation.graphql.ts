/**
 * @generated SignedSource<<538c5eb3464258fb2fb8a260308b1ef5>>
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
    readonly groupProgram?: {
      readonly id: string;
      readonly my: {
        readonly id: string;
      } | null | undefined;
    };
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "GroupProgram",
      "kind": "LinkedField",
      "name": "groupProgram",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "UserGroupProgram",
          "kind": "LinkedField",
          "name": "my",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UserGroupProgram",
  "abstractKey": null
},
v5 = {
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
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c9a2e2e9b284ba14ca3361dc40b268af",
    "id": null,
    "metadata": {},
    "name": "GroupProgramPageButtonCancelMutation",
    "operationKind": "mutation",
    "text": "mutation GroupProgramPageButtonCancelMutation(\n  $input: CancelUserGroupProgramInput!\n) {\n  cancelUserGroupProgram(input: $input) {\n    __typename\n    ... on UserGroupProgram {\n      id\n      groupProgram {\n        id\n        my {\n          id\n        }\n      }\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cc45d33e15165e801e0231132464b637";

export default node;
