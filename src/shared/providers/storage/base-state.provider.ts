export enum StateType {
    inMemory,
    session,
    persisted
}

interface StorageDescriptor {
    name: string;
    type: StateType;
}

interface StateStorage {
    type: StateType;
    value?: any; // tslint:disable-line
}

export class BaseState {
    private storage: any = {}; // tslint:disable-line
    constructor(storage: StorageDescriptor[]) {
        (storage || []).forEach((descriptor: StorageDescriptor) => {
            this.storage[descriptor.name] = { type: descriptor.type };
        });
    }

    public clear(): void {
        for (const item in this.storage) {
            if (this.storage.hasOwnProperty(item)) {
                this.setState(item, undefined);
            }
        }
    }

    public clearExcpet(keys: string[]): void {
        for (const item in this.storage) {
            if (this.storage.hasOwnProperty(item) && !keys.some(key => key === item)) {
                this.setState(item, undefined);
            }
        }
    }

    public reset(): void {
        this.clear();
    }

    protected setState<T>(name: string, value: T): void {
        const storage: StateStorage = this.storage[name];
        if (!storage) {
            throw new Error(`Cannot find storage item named ${name}`);
        }
        switch (storage.type) {
            case StateType.inMemory:
                storage.value = value;
                break;
            case StateType.session:
                if (value) {
                    sessionStorage[name] = value;
                } else if (typeof(value) === 'boolean') {
                    sessionStorage[name] = value;
                } else {
                    delete sessionStorage[name];
                }
                break;
            case StateType.persisted:
                if (value) {
                    localStorage[name] = value;
                } else {
                    delete localStorage[name];
                }
                break;
            default:
                console.error(`Don't know how to handle storage type ${storage.type}`); // tslint:disable-line
                break;
        }
    }

    protected getState<T>(name: string): T {
        const storage: StateStorage = this.storage[name];
        if (!storage) {
            throw new Error(`Cannot find storage item named ${name}`);
        }
        switch (storage.type) {
            case StateType.inMemory:
                return storage.value;
            case StateType.session:
                return sessionStorage[name];
            case StateType.persisted:
                return localStorage[name];
            default:
                console.error(`Don't know how to handle storage type ${storage.type}`); // tslint:disable-line
                return storage.value;
        }
    }
}
