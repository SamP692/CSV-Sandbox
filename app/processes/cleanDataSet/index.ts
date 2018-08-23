import {
    ParsedCsvData,
    ParsedCsvDataObject,
    CleanCsvDataObject,
} from '../../models';

import { filterParsingError } from './filterParsingError';

type ParsedDataEntry = [string, ParsedCsvDataObject];

export const cleanDataSet = (combinedData: ParsedCsvData): CleanCsvDataObject[] =>
    Object.entries(combinedData).reduce(
        (cleanCsvDataSet: CleanCsvDataObject[], parsedCsvEntry: ParsedDataEntry) =>
            [
                ...cleanCsvDataSet,
                {
                    dataSetName: parsedCsvEntry[0],
                    csvInformation: parsedCsvEntry[1].meta,
                    parsingErrors: parsedCsvEntry[1].errors.filter(filterParsingError),
                    data: parsedCsvEntry[1].data
                }
            ],
        []
    );
