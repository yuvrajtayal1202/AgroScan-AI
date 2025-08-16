// Import necessary hooks and components
import React, { useState } from 'react';
import { Upload, Search, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);  // Clear previous results
      setError(null);   // Clear previous errors
    }
  };

  // Handle analyze button click
  const handleAnalyzeClick = async () => {
    if (!selectedFile) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const prediction = await predictDisease(selectedFile);
      setResult(prediction);
    } catch (err) {
      setError(err.message || 'Prediction failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to call backend API
  const predictDisease = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);

    // Use your actual backend URL (localhost for development)
    const response = await fetch('http://localhost:8000/predict', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Request failed');
    }

    return response.json();
  };

  return (
    <section className="py-24 bg-gray-800" id="section-upload">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Upload & Analyze
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Simply take a photo of your plant and let our AI provide instant
          diagnosis with treatment recommendations in seconds.
        </p>

        <div className="bg-gray-700 border-2 border-dashed border-green-500 rounded-2xl p-16 hover:border-green-400 transition-colors">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Upload className="h-12 w-12 text-white" />
            </div>

            <div className="text-2xl font-bold text-white mb-4">
              {selectedFile ? (
                <span className="text-green-400">✓ {selectedFile.name}</span>
              ) : (
                "Drop your plant image here"
              )}
            </div>

            <p className="text-gray-400 mb-8">
              Supports JPG, PNG, HEIC up to 10MB
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />

            <label htmlFor="file-upload">
              <Button
                className="cursor-pointer bg-green-600 hover:bg-green-700 px-8 py-4"
                asChild
              >
                <span>Choose File</span>
              </Button>
            </label>

            {selectedFile && (
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-12 py-4"
                  onClick={handleAnalyzeClick}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Analyze Plant
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Display Results */}
        {result && (
          <div className="mt-12 p-6 bg-gray-900 rounded-xl text-left">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Analysis Result</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Diagnosis</h4>
                <p className="text-xl text-green-300">{result.class}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Confidence</h4>
                <p className="text-xl text-blue-300">
                  {Math.round(result.confidence * 100)}%
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Status</h4>
                <p className="text-xl text-yellow-300">
                  {result.class.includes('Healthy') ? 'Healthy' : 'Needs Attention'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Display Error */}
        {error && (
          <div className="mt-12 p-6 bg-red-900/30 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-2">Error</h3>
            <p className="text-red-300">{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadSection;