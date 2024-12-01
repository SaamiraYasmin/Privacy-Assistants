import WordFilterComponent from "./WordFilterComponent";
import DateFilterComponent from "./DateFilterComponent";
import TypeFilterComponent from "./TypeFilterComponent";

export const FilterType = {
    WORD: 'Word',
    DATE: 'Date',
    TYPE: 'Type'
}

export const availableTypes = [
    FilterType.WORD,
    FilterType.DATE,
    FilterType.TYPE
]

export const FilterTypeToComponent = {
    [FilterType.WORD]: WordFilterComponent,
    [FilterType.DATE]: DateFilterComponent,
    [FilterType.TYPE]: TypeFilterComponent
}