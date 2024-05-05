/**
 * @generated SignedSource<<43b2698e6fbe216163aa557ca43e4d59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserSeasonGroupInput = {
  seasonGroupId: string;
};
export type SeasonGroupMutation$variables = {
  input: CreateUserSeasonGroupInput;
};
export type SeasonGroupMutation$data = {
  readonly createUserSeasonGroup: {
    readonly id?: string;
    readonly message?: string;
    readonly seasonGroup?: {
      readonly iJoined: boolean;
      readonly id: string;
    };
  };
};
export type SeasonGroupMutation = {
  response: SeasonGroupMutation$data;
  variables: SeasonGroupMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "SeasonGroup",
      "kind": "LinkedField",
      "name": "seasonGroup",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "iJoined",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UserSeasonGroup",
  "abstractKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v5 = {
  "kind": "InlineFragment",
  "selections": (v4/*: any*/),
  "type": "AlreadyExistsError",
  "abstractKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": (v4/*: any*/),
  "type": "NotFoundError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SeasonGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createUserSeasonGroup",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SeasonGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createUserSeasonGroup",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ae932b3d5ee5554ca164b463a30ce56b",
    "id": null,
    "metadata": {},
    "name": "SeasonGroupMutation",
    "operationKind": "mutation",
    "text": "mutation SeasonGroupMutation(\n  $input: CreateUserSeasonGroupInput!\n) {\n  createUserSeasonGroup(input: $input) {\n    __typename\n    ... on UserSeasonGroup {\n      id\n      seasonGroup {\n        id\n        iJoined\n      }\n    }\n    ... on AlreadyExistsError {\n      message\n    }\n    ... on NotFoundError {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e5e9e8b79de31af8b82833295b10d7bd";

export default node;
