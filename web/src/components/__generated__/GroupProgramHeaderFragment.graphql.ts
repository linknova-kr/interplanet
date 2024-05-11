/**
 * @generated SignedSource<<e1cc216df19f47bc91893501416bb72d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupProgramHeaderFragment$data = {
  readonly addressSimple: string;
  readonly group: {
    readonly department: {
      readonly name: string;
    };
  };
  readonly id: string;
  readonly startsAt: any;
  readonly title: string;
  readonly " $fragmentType": "GroupProgramHeaderFragment";
};
export type GroupProgramHeaderFragment$key = {
  readonly " $data"?: GroupProgramHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupProgramHeaderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupProgramHeaderFragment",
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
      "name": "addressSimple",
      "storageKey": null
    },
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GroupProgram",
  "abstractKey": null
};

(node as any).hash = "1ad41610ad29343eaf3b2a1e35b2d652";

export default node;
