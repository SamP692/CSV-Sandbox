export type CsvInfo = {
    aborted: boolean;
    cursor?: number;
    delimiter: string;
    fields: string[];
    linebreak?: string;
    truncated: boolean;
}
