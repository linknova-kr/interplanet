/**
 * @generated SignedSource<<04a8df57907e9c3b01e658797f793e2b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type GroupProgramType = "BOOK_DESIGNATED" | "BOOK_FREE" | "ENGLISH" | "FOUNDER" | "%future added value";
export type CreateGroupProgramInput = {
  address: string;
  addressSimple: string;
  description: string;
  endsAt: any;
  groupId: string;
  startsAt: any;
  title: string;
  type: GroupProgramType;
};
export type GroupProgramCreateMutation$variables = {
  input: CreateGroupProgramInput;
};
export type GroupProgramCreateMutation$data = {
  readonly createGroupProgram: {
    readonly __typename: "GroupProgram";
    readonly id: string;
  } | {
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type GroupProgramCreateMutation = {
  response: GroupProgramCreateMutation$data;
  variables: GroupProgramCreateMutation$variables;
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
  "name": "__typename",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v4 = {
  "kind": "InlineFragment",
  "selections": (v3/*: any*/),
  "type": "GroupProgram",
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
    "name": "GroupProgramCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createGroupProgram",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "name": "GroupProgramCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createGroupProgram",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "cacheID": "d3eee8042c52d2c159f014822db05c78",
    "id": null,
    "metadata": {},
    "name": "GroupProgramCreateMutation",
    "operationKind": "mutation",
    "text": "mutation GroupProgramCreateMutation(\n  $input: CreateGroupProgramInput!\n) {\n  createGroupProgram(input: $input) {\n    __typename\n    ... on GroupProgram {\n      id\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2bb3b1e1a97a660260288feb8ea36d01";

export default node;
