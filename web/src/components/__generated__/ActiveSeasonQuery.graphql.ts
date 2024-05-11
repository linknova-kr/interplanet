/**
 * @generated SignedSource<<3a1459a514eb12241412b46ada495a00>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ActiveSeasonQuery$variables = Record<PropertyKey, never>;
export type ActiveSeasonQuery$data = {
  readonly activeSeason: {
    readonly endsAt?: any;
    readonly id?: string;
    readonly name?: string;
    readonly seasonGroups?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly group: {
            readonly department: {
              readonly name: string;
            };
            readonly name: string;
          };
          readonly iJoined: boolean;
          readonly id: string;
        };
      }>;
    };
    readonly startsAt?: any;
  };
};
export type ActiveSeasonQuery = {
  response: ActiveSeasonQuery$data;
  variables: ActiveSeasonQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "name": "endsAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iJoined",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ActiveSeasonQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "activeSeason",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SeasonGroupConnection",
                "kind": "LinkedField",
                "name": "seasonGroups",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SeasonGroupEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SeasonGroup",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Group",
                            "kind": "LinkedField",
                            "name": "group",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Department",
                                "kind": "LinkedField",
                                "name": "department",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v0/*: any*/),
                          (v4/*: any*/)
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
            "type": "Season",
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ActiveSeasonQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "activeSeason",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SeasonGroupConnection",
                "kind": "LinkedField",
                "name": "seasonGroups",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SeasonGroupEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SeasonGroup",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Group",
                            "kind": "LinkedField",
                            "name": "group",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Department",
                                "kind": "LinkedField",
                                "name": "department",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/),
                                  (v0/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v1/*: any*/),
                              (v0/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v0/*: any*/),
                          (v4/*: any*/)
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
            "type": "Season",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v0/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "58da007c644e4cead4769f5dd86fb899",
    "id": null,
    "metadata": {},
    "name": "ActiveSeasonQuery",
    "operationKind": "query",
    "text": "query ActiveSeasonQuery {\n  activeSeason {\n    __typename\n    ... on Season {\n      id\n      name\n      startsAt\n      endsAt\n      seasonGroups {\n        edges {\n          node {\n            group {\n              department {\n                name\n                id\n              }\n              name\n              id\n            }\n            id\n            iJoined\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "94a52c9f913e848a35f29d7f2fe9cdbc";

export default node;
