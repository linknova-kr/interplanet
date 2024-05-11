/**
 * @generated SignedSource<<a694b7fba72811d6031d18a4565d40c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GroupProgramType = "BOOK_DESIGNATED" | "BOOK_FREE" | "ENGLISH" | "FOUNDER" | "%future added value";
export type UserGroupProgramCreatePageQuery$variables = {
  id: string;
};
export type UserGroupProgramCreatePageQuery$data = {
  readonly groupProgram: {
    readonly id?: string;
    readonly message?: string;
    readonly my?: {
      readonly id: string;
    } | null | undefined;
    readonly startsAt?: any;
    readonly title?: string;
    readonly type?: GroupProgramType;
  };
};
export type UserGroupProgramCreatePageQuery = {
  response: UserGroupProgramCreatePageQuery$data;
  variables: UserGroupProgramCreatePageQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "kind": "InlineFragment",
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
      "name": "startsAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserGroupProgram",
      "kind": "LinkedField",
      "name": "my",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": null
    }
  ],
  "type": "GroupProgram",
  "abstractKey": null
},
v5 = {
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
    "name": "UserGroupProgramCreatePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "groupProgram",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/)
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
    "name": "UserGroupProgramCreatePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "groupProgram",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e30a63b245517ab9b876fc65a8414c0b",
    "id": null,
    "metadata": {},
    "name": "UserGroupProgramCreatePageQuery",
    "operationKind": "query",
    "text": "query UserGroupProgramCreatePageQuery(\n  $id: ID!\n) {\n  groupProgram(id: $id) {\n    __typename\n    ... on GroupProgram {\n      id\n      title\n      startsAt\n      type\n      my {\n        id\n      }\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "66547717e027809e22dbfda74b186344";

export default node;
