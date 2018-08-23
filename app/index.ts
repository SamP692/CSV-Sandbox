import { ParsedCsvData, CleanCsvDataObject } from './models';

import { getFileNames, createDataObject, cleanDataSet } from './processes';

const examineAsJson = async (): Promise<void> => {
    try {
        const fileNames: string[] = getFileNames();

        const rawData: ParsedCsvData = await createDataObject(fileNames);

        const cleanData: CleanCsvDataObject[] = cleanDataSet(rawData);

        debugger;
    } catch (error) {
        debugger;
    }
}

examineAsJson();
