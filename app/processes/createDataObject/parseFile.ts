import fs   from 'fs';
import path from 'path';

import Papa from 'papaparse';

import { ParsedCsvDataObject } from '../../models';

type ParsedFile = { fileName: string, data: ParsedCsvDataObject };

export const parseFile = async (fileName: string): Promise<ParsedFile> => {
    const fileLocation = path.join(__dirname, '..', '..', '..', 'static', fileName)

    const csvContents = await fs.readFileSync(fileLocation, { encoding: 'utf8' });

    const csvConfig = { header: true, trimHeaders: true };

    const parsedData = await Papa.parse(csvContents, csvConfig);

    const cleanFileName = fileName.toLowerCase().split('.csv')[0];

    return { fileName: cleanFileName, data: parsedData };
}
