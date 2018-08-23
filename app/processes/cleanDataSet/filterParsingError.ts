import { ParsingError } from '../../models';

export const filterParsingError = (parsingError: ParsingError): boolean =>
    parsingError.code.toLowerCase().includes('toofewfields')
        ? !parsingError.message.toLowerCase().includes('parsed 1')
        : true;
