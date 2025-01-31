// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import staticData from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create';
import { Metadata } from '../Metadata';

describe('toCallsOnly', (): void => {
  const registry = new TypeRegistry();

  it('creates a calls-only version of the  metadata', (): void => {
    const stripped = new Metadata(registry, staticData).asCallsOnly;

    try {
      expect(stripped).toBeDefined();
    } catch (error) {
      console.error(JSON.stringify(stripped));

      throw error;
    }
  });

  it('can serialize from the input', (): void => {
    const s1 = new Metadata(registry, staticData).asCallsOnly.toU8a();
    const s2 = new Metadata(registry, s1).asCallsOnly.toU8a();

    expect(s1).toEqual(s2);
  });
});
