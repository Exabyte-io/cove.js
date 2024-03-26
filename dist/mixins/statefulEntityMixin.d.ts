import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
export declare const StatefulEntityMixin: (superclass: any) => {
    new (props: any): {
        [x: string]: any;
        _resetStateEntityAndUpdateParents(entity: InMemoryEntity, callback: never): void;
        onEntityUpdate: (entity: never) => void;
        _propagateChangesToParents(): void;
        _resetStateEntity(entity: InMemoryEntity, callback: never): void;
    };
    [x: string]: any;
};
