/**
 * @generated SignedSource<<04a9bbedbc6ae664306d75413927657b>>
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
export type SpotEventPageButtonCancelMutation$variables = {
  input: CancelUserSpotEventInput;
};
export type SpotEventPageButtonCancelMutation$data = {
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
export type SpotEventPageButtonCancelMutation = {
  response: SpotEventPageButtonCancelMutation$data;
  variables: SpotEventPageButtonCancelMutation$variables;
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
    "name": "SpotEventPageButtonCancelMutation",
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
    "name": "SpotEventPageButtonCancelMutation",
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
    "cacheID": "72cb975e7b563d60453ec90e023a8661",
    "id": null,
    "metadata": {},
    "name": "SpotEventPageButtonCancelMutation",
    "operationKind": "mutation",
    "text": "mutation SpotEventPageButtonCancelMutation(\n  $input: CancelUserSpotEventInput!\n) {\n  cancelUserSpotEvent(input: $input) {\n    __typename\n    ... on UserSpotEvent {\n      id\n      spotEvent {\n        id\n        my {\n          id\n        }\n      }\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c385e45ed2a370b38db8c2b9823838d4";

export default node;
