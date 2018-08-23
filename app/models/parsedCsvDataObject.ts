import { GenericObject, ParsingError, CsvInfo } from '.';

export type ParsedCsvDataObject = {
    data: GenericObject[];
    errors: ParsingError[];
    meta: CsvInfo;
}
