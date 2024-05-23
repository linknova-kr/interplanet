/**
 * @generated SignedSource<<d7429e73eb1e0913ea50d19587617059>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserSeasonDepartmentGroupStatus = "APPROVAL_PENDING" | "APPROVED" | "REFUNDED" | "REFUND_PENDING" | "%future added value";
export type SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation$variables = {
  id: string;
};
export type SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation$data = {
  readonly withdrawRequestRefundUserSeasonDepartmentGroup: {
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
export type SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation = {
  response: SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation$data;
  variables: SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation$variables;
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
    "name": "SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "withdrawRequestRefundUserSeasonDepartmentGroup",
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
    "name": "SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "withdrawRequestRefundUserSeasonDepartmentGroup",
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
    "cacheID": "668eed419178ddda1d289093a9ef80c0",
    "id": null,
    "metadata": {},
    "name": "SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation",
    "operationKind": "mutation",
    "text": "mutation SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation(\n  $id: ID!\n) {\n  withdrawRequestRefundUserSeasonDepartmentGroup(id: $id) {\n    __typename\n    ... on UserSeasonDepartmentGroup {\n      id\n      status\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c7636968928cad859afb90d4133deaa";

export default node;
