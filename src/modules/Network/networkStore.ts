import { makeAutoObservable } from 'mobx';

class NetworkStore {
    constructor() {
        makeAutoObservable(this);
    }
}

export const networkStore = new NetworkStore();
