// TODO: figure out correct types for this mixin
// @ts-ignore
export const StatefulEntityMixin = (superclass) => class extends superclass {
    // @ts-ignore
    constructor(props) {
        super(props);
        this._resetStateEntity = this._resetStateEntity.bind(this);
        this._propagateChangesToParents = this._propagateChangesToParents.bind(this);
        this._resetStateEntityAndUpdateParents =
            this._resetStateEntityAndUpdateParents.bind(this);
    }
    _resetStateEntityAndUpdateParents(entity, callback) {
        this._resetStateEntity(entity, callback);
        this._propagateChangesToParents();
    }
    _propagateChangesToParents() {
        // @ts-ignore
        this.onEntityUpdate(this.state.entity);
    }
    // helper to trigger re-render on in-place updates
    _resetStateEntity(entity, callback) {
        // @ts-ignore
        this.setState({ entity: entity || this.state.entity }, callback);
    }
};
