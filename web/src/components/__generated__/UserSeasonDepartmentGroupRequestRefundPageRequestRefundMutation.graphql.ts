/**
 * @generated SignedSource<<01132dda59c982728e610833430f930f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserSeasonDepartmentGroupStatus = "APPROVAL_PENDING" | "APPROVED" | "REFUNDED" | "REFUND_PENDING" | "%future added value";
export type RequestRefundUserSeasonDepartmentGroupInput = {
  id: string;
};
export type UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation$variables = {
  input: RequestRefundUserSeasonDepartmentGroupInput;
};
export type UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation$data = {
  readonly requestRefundUserSeasonDepartmentGroup: {
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    readonly __typename: "UserSeasonDepartmentGroup";
    readonly id: string;
    readonly status: UserSeasonDepartmentGroupStatus;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation = {
  response: UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation$data;
  variables: UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation$variables;
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "type": "UserSeasonDepartmentGroup",
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
    "name": "UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "requestRefundUserSeasonDepartmentGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
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
    "name": "UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "requestRefundUserSeasonDepartmentGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/)
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
    "cacheID": "fb949b7bcf43fe46700e70312eb090a6",
    "id": null,
    "metadata": {},
    "name": "UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation",
    "operationKind": "mutation",
    "text": "mutation UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation(\n  $input: RequestRefundUserSeasonDepartmentGroupInput!\n) {\n  requestRefundUserSeasonDepartmentGroup(input: $input) {\n    __typename\n    ... on UserSeasonDepartmentGroup {\n      id\n      status\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3195ffb644eb46b51c796ebbf166cbfa";

export default node;
