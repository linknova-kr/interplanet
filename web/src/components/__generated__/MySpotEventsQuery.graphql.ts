/**
 * @generated SignedSource<<3d43172f269b2718dba9c98e1b570384>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MySpotEventsQuery$variables = Record<PropertyKey, never>;
export type MySpotEventsQuery$data = {
  readonly spotEvents: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly startsAt: any;
        readonly " $fragmentSpreads": FragmentRefs<"SpotEventListItemFragment">;
      };
    }>;
  };
};
export type MySpotEventsQuery = {
  response: MySpotEventsQuery$data;
  variables: MySpotEventsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "Literal",
  "name": "iJoined",
  "value": true
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startsAt",
  "storageKey": null
},
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
  "name": "cursor",
  "storageKey": null
},
v5 = {
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
v6 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10000
  },
  (v0/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MySpotEventsQuery",
    "selections": [
      {
        "alias": "spotEvents",
        "args": [
          (v0/*: any*/)
        ],
        "concreteType": "SpotEventConnection",
        "kind": "LinkedField",
        "name": "__MySpotEvents_spotEvents_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SpotEventEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SpotEvent",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "SpotEventListItemFragment"
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": "__MySpotEvents_spotEvents_connection(iJoined:true)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MySpotEventsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "SpotEventConnection",
        "kind": "LinkedField",
        "name": "spotEvents",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SpotEventEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SpotEvent",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "imageUrl",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "addressSimple",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "iMade",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserSpotEvent",
                    "kind": "LinkedField",
                    "name": "my",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": "spotEvents(first:10000,iJoined:true)"
      },
      {
        "alias": null,
        "args": (v7/*: any*/),
        "filters": [
          "iJoined"
        ],
        "handle": "connection",
        "key": "MySpotEvents_spotEvents",
        "kind": "LinkedHandle",
        "name": "spotEvents"
      }
    ]
  },
  "params": {
    "cacheID": "55b4492d544f66556d3a0a1601775f92",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "spotEvents"
          ]
        }
      ]
    },
    "name": "MySpotEventsQuery",
    "operationKind": "query",
    "text": "query MySpotEventsQuery {\n  spotEvents(iJoined: true, first: 10000) {\n    edges {\n      node {\n        id\n        startsAt\n        ...SpotEventListItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SpotEventListItemFragment on SpotEvent {\n  id\n  title\n  imageUrl\n  addressSimple\n  startsAt\n  iMade\n  my {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "3ab50e795687be58616b676f9300dd2c";

export default node;
