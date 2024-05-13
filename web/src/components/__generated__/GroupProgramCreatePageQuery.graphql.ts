/**
 * @generated SignedSource<<d0db947523778bf1bd80c5723627b174>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GroupProgramCreatePageQuery$variables = Record<PropertyKey, never>;
export type GroupProgramCreatePageQuery$data = {
  readonly activeSeason: {
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    readonly __typename: "Season";
    readonly seasonGroups: ReadonlyArray<{
      readonly group: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type GroupProgramCreatePageQuery = {
  response: GroupProgramCreatePageQuery$data;
  variables: GroupProgramCreatePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "departmentType",
    "value": "BOOK"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Group",
  "kind": "LinkedField",
  "name": "group",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupProgramCreatePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "activeSeason",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "SeasonGroup",
                "kind": "LinkedField",
                "name": "seasonGroups",
                "plural": true,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": "seasonGroups(departmentType:\"BOOK\")"
              }
            ],
            "type": "Season",
            "abstractKey": null
          },
          (v4/*: any*/)
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
    "name": "GroupProgramCreatePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "activeSeason",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "SeasonGroup",
                "kind": "LinkedField",
                "name": "seasonGroups",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": "seasonGroups(departmentType:\"BOOK\")"
              }
            ],
            "type": "Season",
            "abstractKey": null
          },
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
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
    "cacheID": "212e32f9a9ca5f86cadcb957b4ed1a05",
    "id": null,
    "metadata": {},
    "name": "GroupProgramCreatePageQuery",
    "operationKind": "query",
    "text": "query GroupProgramCreatePageQuery {\n  activeSeason {\n    __typename\n    ... on Season {\n      seasonGroups(departmentType: BOOK) {\n        group {\n          id\n          name\n        }\n        id\n      }\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6a3d45dabb596d93bab4583843a4f94f";

export default node;
