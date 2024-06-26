/**
 * @generated SignedSource<<f5c34db8a6d8e59b077e20faba1f8d10>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpotEventSort = "STARTS_AT_ASC" | "STARTS_AT_DESC" | "%future added value";
export type SpotEventStartAtCriteria = "FUTURE" | "PAST" | "%future added value";
export type HomePageSpotEventsQuery$variables = {
  sort?: SpotEventSort | null | undefined;
  startAtCriteria?: SpotEventStartAtCriteria | null | undefined;
};
export type HomePageSpotEventsQuery$data = {
  readonly spotEvents: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"SpotEventListItemFragment">;
      };
    }>;
  };
};
export type HomePageSpotEventsQuery = {
  response: HomePageSpotEventsQuery$data;
  variables: HomePageSpotEventsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sort"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "startAtCriteria"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "activeSeasonOnly",
    "value": true
  },
  {
    "kind": "Variable",
    "name": "sort",
    "variableName": "sort"
  },
  {
    "kind": "Variable",
    "name": "startAtCriteria",
    "variableName": "startAtCriteria"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageSpotEventsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "SpotEventListItemFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
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
    "name": "HomePageSpotEventsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                    "name": "startsAt",
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
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "88bf267ef8b1ea4ab643bc4b8b8b7b2c",
    "id": null,
    "metadata": {},
    "name": "HomePageSpotEventsQuery",
    "operationKind": "query",
    "text": "query HomePageSpotEventsQuery(\n  $sort: SpotEventSort\n  $startAtCriteria: SpotEventStartAtCriteria\n) {\n  spotEvents(sort: $sort, startAtCriteria: $startAtCriteria, activeSeasonOnly: true) {\n    edges {\n      node {\n        id\n        ...SpotEventListItemFragment\n      }\n    }\n  }\n}\n\nfragment SpotEventListItemFragment on SpotEvent {\n  id\n  title\n  imageUrl\n  addressSimple\n  startsAt\n  iMade\n  my {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ed477eb26e461770a3730efd2790759";

export default node;
