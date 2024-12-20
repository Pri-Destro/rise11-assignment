import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  TextField, 
  Select, 
  MenuItem, 
  RadioGroup, 
  FormControlLabel, 
  Radio,
  Button
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const DisputeForm = () => {
    const formik = useFormik({
        initialValues: {
          contractValue: '',
          claimValue: '',
          place: '',
          language: '',
          statement: '',
          agreement: null,
          arbitrationAgreement: null,
          additionalDocs: []
        },
        validationSchema: Yup.object({
          contractValue: Yup.string().required('Required'),
          claimValue: Yup.string().required('Required'),
          statement: Yup.string().required('Required'),
          agreement: Yup.mixed().required('Required'),
        }),
        onSubmit: (values) => {
          console.log(values);
        },
      });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-8">
      <div className="text-lg md:text-xl font-medium mb-4">
        File your Claim. 
        <span className="text-sm text-gray-500 block md:inline md:ml-2">
          (Approx 5 Minutes)
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Claim Value Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Claim Value</h3>
          <div className="space-y-4">
            <TextField
              fullWidth
              label="Contract Value"
              name="contractValue"
              {...formik.getFieldProps('contractValue')}
              InputProps={{
                endAdornment: <span className="text-gray-500">USD</span>,
              }}
            />
            <TextField
              fullWidth
              label="Claim Value"
              name="claimValue"
              {...formik.getFieldProps('claimValue')}
              InputProps={{
                endAdornment: <span className="text-gray-500">USD</span>,
              }}
              helperText="150% of Contract Value"
            />
          </div>
        </div>

        {/* Place Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Place</h3>
          <div className="space-y-4">
            <Select
              fullWidth
              value={formik.values.place}
              onChange={formik.handleChange}
              name="Language"
              displayEmpty
            >
              <MenuItem value="">Select place</MenuItem>
              {/* Add place options */}
            </Select>
            
            <RadioGroup
              row
              name="isAgreementPlace"
              value={formik.values.isAgreementPlace}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </div>
        </div>

        {/* Language Section - Similar to Place section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Place</h3>
          <div className="space-y-4">
            <Select
              fullWidth
              value={formik.values.place}
              onChange={formik.handleChange}
              name="place"
              displayEmpty
            >
              <MenuItem value="">Select Language</MenuItem>
              {/* Add place options */}
            </Select>
            
          </div>
        </div>

      </div>

      {/* Statement Section */}
      <div>
        <h3 className="text-lg font-medium mb-4">Statement</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 text-center">
          <TextField
            multiline
            rows={4}
            fullWidth
            placeholder="Write your Statement Here"
            {...formik.getFieldProps('statement')}
            className="mb-4"
          />
          <div className="text-center">
            <span className="text-gray-500">or</span>
            <Button
              startIcon={<CloudUpload />}
              color="primary"
              className="mt-2"
            >
              Upload a PDF
            </Button>
          </div>
        </div>
      </div>

      {/* File Upload Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <FileUploadSection 
          title="Agreement under Disputes" 
          subtitle="Upload the Contract"
          onUpload={(file) => formik.setFieldValue('agreement', file)}
        />
        {/* Other upload sections */}
      </div>
    </form>
  );
};

const FileUploadSection = ({ title, subtitle, onUpload }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 text-center">
        <Button
          startIcon={<CloudUpload />}
          color="primary"
          fullWidth
          onClick={() => {
            // Handle file upload
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm">{subtitle}</span>
            <span className="text-xs text-gray-500">Max 2MB, PDF</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default DisputeForm;