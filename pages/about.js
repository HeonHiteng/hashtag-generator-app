// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';

const VideoUpload = () => {
  const router = useRouter();
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Handle the uploaded file
    const file = acceptedFiles[0];
    setUploadedVideo(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = () => {
    // Implement your logic to handle the submitted video
    // You can use the 'uploadedVideo' state to get the file data
    console.log('Video submitted:', uploadedVideo);

    // Redirect to another page or perform additional actions
    router.push('/success');
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>

      <main>
        <section>
          <h1
            style={{
              fontSize: '2.5em', // Adjust the font size as needed
              color: '#001F3F', // Dark blue color
            }}
          >
            Video Upload
          </h1>
          <p
            style={{
              fontSize: '1.2em', // Adjust the font size as needed
              color: '#555', // Dark gray color
              marginBottom: '20px', // Add space between the title and description
            }}
          >
            Upload your videos easily and quickly below.
          </p>
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active' : ''}`}
            style={{
              border: '2px dashed #001F3F', // Dashed border
              borderRadius: '8px', // Rounded corners
              padding: '50px', // Padding inside the drop zone
              textAlign: 'center', // Center text
              cursor: 'pointer', // Cursor on hover
              marginBottom: '20px', // Add space between the box and the button
            }}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop a video file here, or click to select a file</p>
          </div>
          {uploadedVideo && (
            <div>
              <p>Uploaded Video:</p>
              <p>{uploadedVideo.name}</p>
            </div>
          )}
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#001F3F', // Button background color
              color: 'white', // Button text color
              padding: '10px 20px', // Padding inside the button
              borderRadius: '4px', // Rounded corners
              cursor: 'pointer', // Cursor on hover
              border: 'none', // No border
            }}
          >
            Submit Video
          </button>
        </section>
      </main>


    </div>
  );
};

export default VideoUpload;

