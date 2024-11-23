import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

const LoadingScreen = ({ progress }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="flex flex-col items-center  p-8 rounded-lg">
          <Box sx={{ 
            width: '300px', 
            marginBottom: 2, 
            // backgroundColor: 'blue', 
            borderRadius: '10px',
            // padding: '4px', // Added padding for better visual
          }}>
            <LinearProgress
              variant="determinate"
              value={progress || 0} // Handle undefined progress
              sx={{
                height: 30,
                borderRadius: 10,
                backgroundColor: 'rgba(137, 207, 240, 0.3)', // Lighter background for contrast
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(90deg, #004ff9, #101010)',
                  transition: 'transform 0.4s ease', // Smoother transition
                },
              }}
            />
          </Box>
          <Typography
            variant="h5" // Larger text size
            sx={{ 
              color: '#113313',
              fontWeight: 500,
              marginTop: 2,
              letterSpacing: '0.05em'
            }}
          >
            {progress ? `${Math.round(progress)}%` : 'Loading...'}
          </Typography>
        </div>
      </div>
    );
  };
  
  export default LoadingScreen;