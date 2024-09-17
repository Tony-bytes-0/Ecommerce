import React, { useState, useRef } from 'react';
import {
  InputBase,
  IconButton,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

interface ImageInputProps {
  onImageChange: (file: any) => void;
  image: any;
  //multiple?: boolean;
  //accept?: string;
}

const ImageInputComponent: React.FC<ImageInputProps> = ({
  onImageChange,
  image
  //multiple = true,
  //accept = 'image/*',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !files.length) return;

    const newSelectedFiles = Array.from(files);
    onImageChange(newSelectedFiles)
    //setSelectedFiles(newSelectedFiles);

    const formData = new FormData();
    newSelectedFiles.forEach(file => formData.append('images', file));

    generatePreviewUrls(newSelectedFiles);
  };

  const generatePreviewUrls = (files: File[]) => {
    const urls = files.map(file =>
      URL.createObjectURL(file)
    );
    setPreviewUrls(urls);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Select images"
        inputProps={{ 'aria-label': 'select images' }}
        readOnly
      />
      <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleButtonClick}>
        <PhotoCameraIcon />
      </IconButton>
      <input
        ref={fileInputRef}
        onChange={handleFileChange}
        type="file"
        //value={image}
        //accept={accept}
        //multiple={multiple}
        hidden
      />
      {previewUrls.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2">Selected Images:</Typography>
          <Grid container spacing={1}>
            {previewUrls.map((url, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <img src={url} alt={`Selected Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ImageInputComponent;