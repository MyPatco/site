export interface Station {
    id?: string;
    title?: string;
    eastBound?: Depature[];
    westBound?: Depature[];
}

export interface Depature {
    time?: string;
    status?: string;
}
