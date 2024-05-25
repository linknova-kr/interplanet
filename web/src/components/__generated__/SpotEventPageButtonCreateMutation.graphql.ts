/**
 * @generated SignedSource<<e5339d091ee2086adb56b2a63fe3dcc1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserSpotEventInput = {
  comment: string;
  spotEventId: string;
};
export type SpotEventPageButtonCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateUserSpotEventInput;
};
export type SpotEventPageButtonCreateMutation$data = {
  readonly createUserSpotEvent: {
    readonly __typename: "AlreadyExistsError";
    readonly message: string;
  } | {
    readonly __typename: "NotAllowedError";
    readonly message: string;
  } | {
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    readonly __typename: "UserSpotEvent";
    readonly comment: string;
    readonly id: string;
    readonly spotEvent: {
      readonly id: string;
      readonly my: {
        readonly id: string;
      } | null | undefined;
    };
    readonly user: {
      readonly id: string;
      readonly nickname: string;
      readonly realName: string;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type SpotEventPageButtonCreateMutation = {
  response: SpotEventPageButtonCreateMutation$data;
  variables: SpotEventPageButtonCreateMutation$variables;
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
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "realName",
          "storageKey": null
        },
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
      "name": "comment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SpotEvent",
      "kind": "LinkedField",
      "name": "spotEvent",
      "plural": false,
      "selections": [
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "UserSpotEvent",
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
  "type": "UserSpotEvent",
  "abstractKey": null
},
v7 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
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
},
v10 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "NotAllowedError",
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
    "name": "SpotEventPageButtonCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createUserSpotEvent",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v6/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
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
    "name": "SpotEventPageButtonCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createUserSpotEvent",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v6/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
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
        "name": "createUserSpotEvent",
        "handleArgs": [
          {
            "kind": "Variable",
            "name": "connections",
            "variableName": "connections"
          },
          {
            "kind": "Literal",
            "name": "edgeTypeName",
            "value": "UserSpotEventEdge"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "6f40bc9aa64c56a55133080d9fa6b4f9",
    "id": null,
    "metadata": {},
    "name": "SpotEventPageButtonCreateMutation",
    "operationKind": "mutation",
    "text": "mutation SpotEventPageButtonCreateMutation(\n  $input: CreateUserSpotEventInput!\n) {\n  createUserSpotEvent(input: $input) {\n    __typename\n    ... on UserSpotEvent {\n      id\n      user {\n        id\n        realName\n        nickname\n      }\n      comment\n      spotEvent {\n        id\n        my {\n          id\n        }\n      }\n    }\n    ... on AlreadyExistsError {\n      message\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on NotAllowedError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f84730b1e23e090ee845c32ffcfd0be0";

export default node;
