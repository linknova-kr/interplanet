/**
 * @generated SignedSource<<922cef274748eaf733b4ff604c31ade1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpotEventListItemFragment$data = {
  readonly addressSimple: string;
  readonly iMade: boolean;
  readonly id: string;
  readonly imageUrl: string;
  readonly my: {
    readonly id: string;
  } | null | undefined;
  readonly startsAt: any;
  readonly title: string;
  readonly " $fragmentType": "SpotEventListItemFragment";
};
export type SpotEventListItemFragment$key = {
  readonly " $data"?: SpotEventListItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpotEventListItemFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpotEventListItemFragment",
  "selections": [
    (v0/*: any*/),
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
      "name": "imageUrl",
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
      "kind": "ScalarField",
      "name": "startsAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iMade",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserSpotEvent",
      "kind": "LinkedField",
      "name": "my",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "SpotEvent",
  "abstractKey": null
};
})();

(node as any).hash = "874411c243c4095f18651dd2e448ad9b";

export default node;
