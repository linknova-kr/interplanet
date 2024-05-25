/**
 * @generated SignedSource<<bfcc6d37592bd6c52b5e127561ba019d>>
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
  readonly id: string;
  readonly imageUrl: string;
  readonly startsAt: any;
  readonly title: string;
  readonly " $fragmentType": "SpotEventListItemFragment";
};
export type SpotEventListItemFragment$key = {
  readonly " $data"?: SpotEventListItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpotEventListItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpotEventListItemFragment",
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
    }
  ],
  "type": "SpotEvent",
  "abstractKey": null
};

(node as any).hash = "497898f8237831d913a2c20264b05274";

export default node;
