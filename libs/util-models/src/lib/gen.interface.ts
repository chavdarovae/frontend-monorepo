export interface IMenuItem {
    id: number,
    path: string,
    title: string
}

export interface IAlert {
    msg: string,
    type: 'danger' | 'success' | 'warn'
}

export interface IBasicUserInteraction<T1, T2> {
    action: T1,
    entity: T2
};
