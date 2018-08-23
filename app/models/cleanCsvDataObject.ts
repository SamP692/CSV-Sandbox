import { ParsingError, CsvInfo, GenericObject } from '.';

export type CleanCsvDataObject = {
    dataSetName: string;
    data: GenericObject[];
    csvInformation: CsvInfo;
    parsingErrors: ParsingError[];
}
