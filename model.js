const fs = require('fs');
const path = require('path');

module.exports = {
  createModule: (name) => {
    return new Model();
  }
};


function Model(name) {
  const DATA_FOLDER_PATH = path.join(__dirname, './.data', name);
  this.DATA_FOLDER_PATH = DATA_FOLDER_PATH;
  try {
    const modelDataFolder = fs.mkdirSync(DATA_FOLDER_PATH, { recursive: true });
    console.log('Model with the name of ' + name + ' was created');
    console.log('the vlaue of the model data folder: ', modelDataFolder);
  }
  catch (error) {
    console.error('the value of the error: ', error);
  }
}


Model.prototype.create = (record, callback) => {
  const { DATA_FOLDER_PATH } = this;
  const recordId = _generateRecordId();
  const recordStringified = JSON.stringify(record);
  const recordFilePath = path.join(DATA_FOLDER_PATH, recordId);
  fs.writeFile(recordFilePath, recordStringified, { encoding: 'utf-8' }, callback);
};

Model.prototype.findById = (recordId, callback) => {
  // Aya Create this

};

const _generateRecordId = () => {

}
