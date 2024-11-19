// // backend/utils/datauri.js
// import DatauriParser from 'datauri/parser.js';
// import path from 'path';

// const parser = new DatauriParser();

// const getDataUri = (file) => {
//     // Extract the file extension
//     const extName = path.extname(file.originalname).toString();
    
//     // Use DatauriParser to convert file buffer to a data URI
//     return parser.format(extName, file.buffer);
// };

// export default getDataUri;
import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;
