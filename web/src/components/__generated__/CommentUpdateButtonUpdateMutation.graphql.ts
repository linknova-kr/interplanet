/**
 * @generated SignedSource<<a37f5ded2ffa795f7ffbf2e189e34835>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateCommentInput = {
  content?: string | null | undefined;
};
export type CommentUpdateButtonUpdateMutation$variables = {
  id: string;
  input: UpdateCommentInput;
};
export type CommentUpdateButtonUpdateMutation$data = {
  readonly updateComment: {
    readonly __typename: "Comment";
    readonly content: string;
    readonly id: string;
  } | {
    readonly __typename: "NotFoundError";
    readonly message: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CommentUpdateButtonUpdateMutation = {
  response: CommentUpdateButtonUpdateMutation$data;
  variables: CommentUpdateButtonUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": null,
    "kind": "LinkedField",
    "name": "updateComment",
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
            "name": "content",
            "storageKey": null
          }
        ],
        "type": "Comment",
        "abstractKey": null
      },
      {
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentUpdateButtonUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommentUpdateButtonUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "46d230db07740196c1f0bb6dce94273f",
    "id": null,
    "metadata": {},
    "name": "CommentUpdateButtonUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CommentUpdateButtonUpdateMutation(\n  $id: ID!\n  $input: UpdateCommentInput!\n) {\n  updateComment(id: $id, input: $input) {\n    __typename\n    ... on Comment {\n      id\n      content\n    }\n    ... on NotFoundError {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1cd952b4dde97780bef0b80e5582f648";

export default node;
