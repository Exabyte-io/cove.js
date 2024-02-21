import { Completion, CompletionContext, CompletionResult } from "@codemirror/autocomplete";
interface SuggestionInterface {
    label: string;
    apply: string;
    detail: string;
    type: string;
    info: string | null;
    enum?: string[];
}
interface PropertyValueInterface {
    type?: string;
    description?: string;
    schemaId?: string;
    enum?: string[];
    properties?: Record<string, PropertyValueInterface>;
    items?: PropertyValueInterface;
    anyOf?: PropertyValueInterface[];
}
export declare function jsonCompletions(context: CompletionContext, completionsArray: Completion[]): CompletionResult | null;
/**
 * @summary Function to get fields suggestions based on entity schema structure.
 * @param {Object} schema - Entity schema describing document structure.
 * @param {String} prefix - Prefix added to label when prepare nested fields.
 * @param {Array} suggestions - Array of suggestions formed from schema fields.
 */
export declare function getFieldsSuggestions(schema: {
    properties?: Record<string, PropertyValueInterface>;
}, prefix: string, suggestions: SuggestionInterface[]): SuggestionInterface[];
/**
 * @summary Combines an array of suggestions by their label, removing duplicates and merging enum values.
 * @function
 * @param {SuggestionInterface[]} suggestions - An array of suggestion objects.
 * @returns {SuggestionInterface[]} - An array of unique suggestions.
 *
 * @typedef {Object} SuggestionInterface
 * @property {string} label - The suggestion label.
 * @property {string} apply - The text to insert if the suggestion is selected.
 * @property {string} detail - A description of the suggestion.
 * @property {string} type - The suggestion type.
 * @property {string} info - Additional information about the suggestion.
 * @property {string[]} [enum] - An array of enum values for the suggestion, if applicable.
 */
export declare function combineByLabel(suggestions: SuggestionInterface[]): SuggestionInterface[];
export {};
