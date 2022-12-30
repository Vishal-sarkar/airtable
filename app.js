var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key8hb6go3olkAMmQ'}).base('appdhzPEHaiRDTPGY');

const table = base('Table 1');
const getRecords = async () => {
    const records = await table.select({maxRecords: 1, view: "Grid view"}).firstPage();
    console.log(records);
}

const getRecordByID = async (id) => {
    const records = await table.find(id, function(err, record) {
        if (err) { console.error(err); return; }
        console.log('Retrieved', record.id);
    });
    // console.log(records);
}
const createRecord = async (fields) => {
    const createdRecord = await table.create(fields);
    console.log(minifyRecord(createdRecord));
}
const updateRecord = async(id, fields) => {
    const updatedRecord = await table.update(id, fields);
    console.log(minifyRecord(updatedRecord));
}
const deleteRecord = async(id) => {
    try {
        const deletedRecord = await table.destroy(id);
        console.log(minifyRecord(deletedRecord));
    } catch (error) {
        console.log(error);
    }
}
const minifyRecord = (record) => {
    return {
        id: record.id,
        fields: record.fields,
    }
}
deleteRecord('recXEhN1t1NPOXM4d');
// updateRecord('recXEhN1t1NPOXM4d',{
//     Name: "updated!!"
// })
// createRecord({
//     Name: "Rohan Test"
// })
// getRecordByID('recSHMJwNTltl1Sb1');
