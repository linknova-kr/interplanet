/**
 * @generated SignedSource<<f7cde02ad57c7a047193cd7a1d683b7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CancelUserSpotEventInput = {
  id: string;
};
export type SpotEventListItemButtonsCancelMutation$variables = {
  input: CancelUserSpotEventInput;
};
export type SpotEventListItemButtonsCancelMutation$data = {
  readonly cancelUserSpotEvent: {
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    readonly __typename: "UserSpotEvent";
    readonly id: string;
    readonly spotEvent: {
      readonly id: string;
      readonly my: {
        readonly id: string;
      } | null | undefined;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type SpotEventListItemButtonsCancelMutation = {
  response: SpotEventListItemButtonsCancelMutation$data;
  variables: SpotEventListItemButtonsCancelMutation$variables;
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
],
v5 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "SpotEvent",
      "kind": "LinkedField",
      "name": "spotEvent",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "UserSpotEvent",
          "kind": "LinkedField",
          "name": "my",
          "plural": false,
          "selections": (v4/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UserSpotEvent",
  "abstractKey": null
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
    "name": "SpotEventListItemButtonsCancelMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "cancelUserSpotEvent",
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
    "name": "SpotEventListItemButtonsCancelMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "cancelUserSpotEvent",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v5/*: any*/),
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
    "cacheID": "769c1db0bead4b4f6f3a2a29df65acba",
    "id": null,
    "metadata": {},
    "name": "SpotEventListItemButtonsCancelMutation",
    "operationKind": "mutation",
    "text": "mutation SpotEventListItemButtonsCancelMutation(\n  $input: CancelUserSpotEventInput!\n) {\n  cancelUserSpotEvent(input: $input) {\n    __typename\n    ... on UserSpotEvent {\n      id\n      spotEvent {\n        id\n        my {\n          id\n        }\n      }\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "76043f5ab21f7d68d5d584e4d95fa39d";

export default node;
