import { asyncForEach } from '../../utils';

import { ParsedCsvData } from '../../models';

import { parseFile } from './parseFile';

export const createDataObject = async (files: string[]): Promise<ParsedCsvData> => {
    const combinedData: ParsedCsvData = {};

    await asyncForEach(files, async (file: string) => {
        const { fileName, data } = await parseFile(file);

        combinedData[fileName] = data;
    })

    return combinedData;
}
