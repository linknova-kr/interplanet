/**
 * @generated SignedSource<<9d97904f3aeab29dcf38fa4ae5ddb51e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SpotEventPageQuery$variables = {
  id: string;
};
export type SpotEventPageQuery$data = {
  readonly spotEvent: {
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    readonly __typename: "SpotEvent";
    readonly address: string;
    readonly addressSimple: string;
    readonly description: string;
    readonly endsAt: any;
    readonly id: string;
    readonly imageUrl: string;
    readonly my: {
      readonly id: string;
    } | null | undefined;
    readonly startsAt: any;
    readonly title: string;
    readonly userSpotEvents: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly comment: string;
          readonly id: string;
          readonly user: {
            readonly nickname: string;
            readonly realName: string;
          };
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type SpotEventPageQuery = {
  response: SpotEventPageQuery$data;
  variables: SpotEventPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "addressSimple",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startsAt",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endsAt",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "realName",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nickname",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v17 = [
  (v4/*: any*/)
],
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "UserSpotEvent",
  "kind": "LinkedField",
  "name": "my",
  "plural": false,
  "selections": (v17/*: any*/),
  "storageKey": null
},
v19 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10000
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SpotEventPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "spotEvent",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "alias": "userSpotEvents",
                "args": null,
                "concreteType": "UserSpotEventConnection",
                "kind": "LinkedField",
                "name": "__SpotEvent_userSpotEvents_connection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserSpotEventEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "UserSpotEvent",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
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
                              (v12/*: any*/),
                              (v13/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v14/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              (v18/*: any*/)
            ],
            "type": "SpotEvent",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SpotEventPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "spotEvent",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": (v19/*: any*/),
                "concreteType": "UserSpotEventConnection",
                "kind": "LinkedField",
                "name": "userSpotEvents",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserSpotEventEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "UserSpotEvent",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
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
                              (v12/*: any*/),
                              (v13/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v14/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v16/*: any*/)
                ],
                "storageKey": "userSpotEvents(first:10000)"
              },
              {
                "alias": null,
                "args": (v19/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "SpotEvent_userSpotEvents",
                "kind": "LinkedHandle",
                "name": "userSpotEvents"
              },
              (v18/*: any*/)
            ],
            "type": "SpotEvent",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v17/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "42de3f75df1e5f8f1c03a0dbf4d3ede5",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "spotEvent",
            "userSpotEvents"
          ]
        }
      ]
    },
    "name": "SpotEventPageQuery",
    "operationKind": "query",
    "text": "query SpotEventPageQuery(\n  $id: ID!\n) {\n  spotEvent(id: $id) {\n    __typename\n    ... on NotFoundError {\n      message\n    }\n    ... on SpotEvent {\n      id\n      title\n      description\n      imageUrl\n      address\n      addressSimple\n      startsAt\n      endsAt\n      userSpotEvents(first: 10000) {\n        edges {\n          node {\n            id\n            user {\n              realName\n              nickname\n              id\n            }\n            comment\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      my {\n        id\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6d07111526adf7f422a6882aed73e59f";

export default node;
