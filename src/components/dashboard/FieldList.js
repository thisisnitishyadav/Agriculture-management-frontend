import React, { useEffect, useState } from 'react';
import { getFields, deleteField, createField } from '../../api/field';

const FieldList = () => {
  const [fields, setFields] = useState([]);
  const [newFieldName, setNewFieldName] = useState('');
  const [newFieldCropType, setNewFieldCropType] = useState('');

  // Fetch fields on component mount
  useEffect(() => {
    const fetchFields = async () => {
      try {
        const data = await getFields();
        setFields(data);
      } catch (error) {
        console.error('Failed to fetch fields:', error);
      }
    };
    fetchFields();
  }, []);

  // Handle the delete operation
  const handleDelete = async (fieldId) => {
    try {
      await deleteField(fieldId);
      setFields(fields.filter((field) => field._id !== fieldId));
    } catch (error) {
      console.error('Failed to delete field:', error);
    }
  };

  // Handle field creation
  const handleCreate = async () => {
    if (!newFieldName || !newFieldCropType) {
      alert('Please provide both field name and crop type.');
      return;
    }

    const newFieldData = { name: newFieldName, cropType: newFieldCropType };
    try {
      const createdField = await createField(newFieldData);
      setFields([...fields, createdField]); 
      setNewFieldName(''); 
      setNewFieldCropType('');
    } catch (error) {
      console.error('Failed to create field:', error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Field List</h2>

      {/* Form to create a new field */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Field Name"
          value={newFieldName}
          onChange={(e) => setNewFieldName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Crop Type"
          value={newFieldCropType}
          onChange={(e) => setNewFieldCropType(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-2 w-full"
        />
        <button
          onClick={handleCreate}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
        >
          Create Field
        </button>
      </div>

      {/* Display fields */}
      {fields.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {fields.map((field) => (
            <li key={field._id} className="flex justify-between items-center py-2">
              <div>
                <p className="text-lg font-medium text-gray-800">{field.name}</p>
                <p className="text-sm text-gray-500">Crop: {field.cropType}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                onClick={() => handleDelete(field._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No fields found. Add some fields to manage them here.</p>
      )}
    </div>
  );
};

export default FieldList;
