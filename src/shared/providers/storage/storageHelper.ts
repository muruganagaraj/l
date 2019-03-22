import { Injectable } from '@angular/core';
import { BaseState, StateType } from './base-state.provider';

@Injectable()
export class StorageHelper extends BaseState {
    constructor() {
        super([
            { type: StateType.session, name: 'name' }
        ]);
    }

    public set name(value: string) {
        this.setState('name', value);
    }

    public get name(): string {
        return this.getState<string>('name');
    }
}
