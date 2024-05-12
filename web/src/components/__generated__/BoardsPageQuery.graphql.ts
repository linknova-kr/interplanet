/**
 * @generated SignedSource<<33cb4650d67eb6cdc4db4c66699dfeb3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BoardsPageQuery$variables = Record<PropertyKey, never>;
export type BoardsPageQuery$data = {
  readonly boards: ReadonlyArray<{
    readonly id: string;
    readonly nameEn: string;
    readonly nameKr: string;
  }>;
};
export type BoardsPageQuery = {
  response: BoardsPageQuery$data;
  variables: BoardsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Board",
    "kind": "LinkedField",
    "name": "boards",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nameEn",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nameKr",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardsPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardsPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1375096e53b545e0d2e9727633cd6a94",
    "id": null,
    "metadata": {},
    "name": "BoardsPageQuery",
    "operationKind": "query",
    "text": "query BoardsPageQuery {\n  boards {\n    id\n    nameEn\n    nameKr\n  }\n}\n"
  }
};
})();

(node as any).hash = "c442855e17d2d4272e54143a87ed6f97";

export default node;
