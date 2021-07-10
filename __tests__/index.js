import { describe, it, expect } from "@jest/globals";
import { cloneDeep, createAgent, createReducer, createStore, withStore, } from '../';

describe('The index file', () => {
  it ('exports functions correctly', () => {
    expect(cloneDeep).toBeDefined();
    expect(createAgent).toBeDefined();
    expect(createReducer).toBeDefined();
    expect(createStore).toBeDefined();
    expect(withStore).toBeDefined();
  });
});
