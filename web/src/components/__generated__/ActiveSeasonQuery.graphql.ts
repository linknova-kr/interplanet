/**
 * @generated SignedSource<<ebec64cd850c01499148edcad2adbe1a>>
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
    readonly seasonDepartments?: ReadonlyArray<{
      readonly department: {
        readonly name: string;
      };
      readonly id: string;
      readonly message: string;
    }>;
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
  "name": "message",
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
                "concreteType": "SeasonDepartment",
                "kind": "LinkedField",
                "name": "seasonDepartments",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v4/*: any*/),
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
                "concreteType": "SeasonDepartment",
                "kind": "LinkedField",
                "name": "seasonDepartments",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v4/*: any*/),
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
    "cacheID": "f5ba0aa697f5692b459674c628cde9a3",
    "id": null,
    "metadata": {},
    "name": "ActiveSeasonQuery",
    "operationKind": "query",
    "text": "query ActiveSeasonQuery {\n  activeSeason {\n    __typename\n    ... on Season {\n      id\n      name\n      startsAt\n      endsAt\n      seasonDepartments {\n        id\n        message\n        department {\n          name\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1b24248ea1e03422c0af1b3d90a4ce2e";

export default node;
