import fs from 'fs';
import path from 'path';

export const getFileNames = (): string[] => {
    const dataFolder = path.join(__dirname, '..', '..', '..', 'static');

    try {
        return fs.readdirSync(dataFolder)
    } catch (error) {
        throw error;
    }
}