// eslint-disable-next-line import/no-extraneous-dependencies
import { InMemoryEntity } from "@exabyte-io/code.js/dist/entity";

// @ts-ignore
export const StatefulEntityMixin = (superclass) =>
    class extends superclass {
        // @ts-ignore
        constructor(props) {
            super(props);
            this._resetStateEntity = this._resetStateEntity.bind(this);
            this._propagateChangesToParents = this._propagateChangesToParents.bind(this);
            this._resetStateEntityAndUpdateParents =
                this._resetStateEntityAndUpdateParents.bind(this);
        }

        _resetStateEntityAndUpdateParents(entity: InMemoryEntity, callback: never) {
            this._resetStateEntity(entity, callback);
            this._propagateChangesToParents();
        }

        declare onEntityUpdate: (entity: never) => void;

        _propagateChangesToParents() {
            // @ts-ignore
            this.onEntityUpdate(this.state.entity);
        }

        // helper to trigger re-render on in-place updates
        _resetStateEntity(entity: InMemoryEntity, callback: never) {
            // @ts-ignore
            this.setState({ entity: entity || this.state.entity }, callback);
        }
    };
