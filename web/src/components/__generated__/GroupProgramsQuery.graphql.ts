/**
 * @generated SignedSource<<53888d0cc60720895836c1fffc0e0dc4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GroupProgramSort = "STARTS_AT_ASC" | "STARTS_AT_DESC" | "%future added value";
export type GroupProgramStartAtCriteria = "FUTURE" | "PAST" | "%future added value";
export type GroupProgramsQuery$variables = {
  departmentId?: string | null | undefined;
  sort?: GroupProgramSort | null | undefined;
  startAtCriteria?: GroupProgramStartAtCriteria | null | undefined;
};
export type GroupProgramsQuery$data = {
  readonly groupPrograms: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly address: string;
        readonly endsAt: any;
        readonly group: {
          readonly department: {
            readonly name: string;
          };
        };
        readonly id: string;
        readonly my: {
          readonly id: string;
        } | null | undefined;
        readonly startsAt: any;
        readonly title: string;
      };
    }>;
  };
};
export type GroupProgramsQuery = {
  response: GroupProgramsQuery$data;
  variables: GroupProgramsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "departmentId"
  },
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
    "kind": "Variable",
    "name": "departmentId",
    "variableName": "departmentId"
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startsAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endsAt",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "UserGroupProgram",
  "kind": "LinkedField",
  "name": "my",
  "plural": false,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupProgramsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GroupProgramConnection",
        "kind": "LinkedField",
        "name": "groupPrograms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GroupProgramEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "GroupProgram",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
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
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/)
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
    "name": "GroupProgramsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GroupProgramConnection",
        "kind": "LinkedField",
        "name": "groupPrograms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GroupProgramEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "GroupProgram",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
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
                          (v7/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/)
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
    "cacheID": "78fbb5bd98e6effb9b922b7933eb4c2a",
    "id": null,
    "metadata": {},
    "name": "GroupProgramsQuery",
    "operationKind": "query",
    "text": "query GroupProgramsQuery(\n  $departmentId: ID\n  $sort: GroupProgramSort\n  $startAtCriteria: GroupProgramStartAtCriteria\n) {\n  groupPrograms(departmentId: $departmentId, sort: $sort, startAtCriteria: $startAtCriteria) {\n    edges {\n      node {\n        id\n        title\n        startsAt\n        endsAt\n        my {\n          id\n        }\n        group {\n          department {\n            name\n            id\n          }\n          id\n        }\n        address\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "598420a01307c0ed65d6a7f669f1c3a5";

export default node;
