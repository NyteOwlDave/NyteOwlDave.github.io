
function generateSQLInsert( data ) {

    // Parse the input if it is a JSON string
    if ( typeof data === "string" ) {
        data = JSON.parse( data );
    }

    // Extract table name, fields, and records from the input object
    const { table, fields, records } = data;

    // Construct the SQL INSERT statement
    const insertIntoPart = `
INSERT INTO \`${table}\` ( \`${fields.join("`, `")}\` ) VALUES 
`.trim();

    const valuesPart = records.map( record => {
        return `( ${ record.map( value => `\`${value}\``).join( ", " ) } )`;
    } ).join( ", " );

    return `${insertIntoPart}${valuesPart};`;
}

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/
