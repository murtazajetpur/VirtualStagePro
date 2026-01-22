import React, { useState, useRef, useEffect } from 'react';
import { Upload, X, Loader2, Download, RefreshCw, Trash2, Maximize2, CheckCircle, AlertCircle } from 'lucide-react';
import { ROOM_TYPES, DESIGN_STYLES, STAGING_MODES } from '../constants';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { ProcessingState } from '../types';

const Dashboard: React.FC = () => {
  const [state, setState] = useState<ProcessingState>('upload');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [config, setConfig] = useState({
    roomType: ROOM_TYPES[0],
    style: DESIGN_STYLES[0],
    mode: STAGING_MODES[0],
    consistency: false
  });
  const [regenerationsLeft, setRegenerationsLeft] = useState(3);
  
  // Mock processing time
  useEffect(() => {
    if (state === 'processing') {
      const timer = setTimeout(() => {
        // Generate a random seed to simulate a new image
        const seed = Math.floor(Math.random() * 1000);
        setGeneratedImage(`https://picsum.photos/seed/${seed}/1200/800`);
        setState('result');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // In a real app, upload logic here.
    // For mock, create object URL
    const url = URL.createObjectURL(file);
    setSelectedImage(url);
    setState('configure');
  };

  const handleRegenerate = () => {
    if (regenerationsLeft > 0) {
      setRegenerationsLeft(prev => prev - 1);
      setState('processing');
    }
  };

  const handleStartOver = () => {
    setSelectedImage(null);
    setGeneratedImage(null);
    setRegenerationsLeft(3);
    setState('upload');
  };

  return (
    <div className="h-[calc(100vh-64px)] flex bg-white overflow-hidden">
      
      {/* Sidebar / Configuration Panel */}
      <aside className="w-96 border-r border-slate-200 flex flex-col h-full bg-slate-50 z-20 shadow-xl overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Project Settings</h2>
          
          {state === 'upload' ? (
             <div className="text-sm text-slate-500">
               Upload an image to start configuring your design.
             </div>
          ) : (
            <div className="space-y-8">
              {/* Mode Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  {STAGING_MODES.map(mode => (
                    <button
                      key={mode}
                      onClick={() => setConfig({...config, mode})}
                      className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                        config.mode === mode 
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Room Type</label>
                <select 
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 text-sm"
                  value={config.roomType}
                  onChange={(e) => setConfig({...config, roomType: e.target.value})}
                >
                  {ROOM_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Style */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Design Style</label>
                <div className="grid grid-cols-2 gap-3">
                  {DESIGN_STYLES.map(style => (
                    <button
                      key={style}
                      onClick={() => setConfig({...config, style})}
                      className={`relative overflow-hidden rounded-lg aspect-[3/2] border-2 transition-all group ${
                        config.style === style 
                          ? 'border-indigo-600 ring-1 ring-indigo-600' 
                          : 'border-transparent hover:border-slate-300'
                      }`}
                    >
                      <img 
                        src={`https://picsum.photos/seed/${style}/200/150`} 
                        alt={style} 
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100" 
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                         <span className={`text-xs font-medium text-white text-center px-1 ${config.style === style ? 'font-bold' : ''}`}>
                           {style}
                         </span>
                      </div>
                      {config.style === style && (
                        <div className="absolute top-1 right-1 bg-indigo-600 rounded-full p-0.5">
                          <CheckCircle size={10} className="text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Options */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-2">
                   <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                     Multi-View Consistency
                     <span className="bg-indigo-100 text-indigo-700 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wide">Pro</span>
                   </label>
                   <div 
                     className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${config.consistency ? 'bg-indigo-600' : 'bg-slate-300'}`}
                     onClick={() => setConfig({...config, consistency: !config.consistency})}
                   >
                     <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${config.consistency ? 'translate-x-5' : ''}`}></div>
                   </div>
                </div>
                <p className="text-xs text-slate-500">Ensures furniture looks identical across different angles of the same room.</p>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => setState('processing')}
                  disabled={state === 'processing'}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
                >
                  {state === 'processing' ? (
                    <><Loader2 className="animate-spin" size={18}/> Designing...</>
                  ) : state === 'result' ? (
                    'Generate New Variation'
                  ) : (
                    'Generate Design'
                  )}
                </button>
                {state === 'result' && (
                  <p className="text-center text-xs text-slate-500 mt-2">
                    {regenerationsLeft} free regenerations left
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Canvas Area */}
      <main className="flex-grow bg-slate-100 relative flex items-center justify-center p-8">
        {state === 'upload' && (
          <div 
            className={`w-full max-w-2xl aspect-[16/9] rounded-3xl border-2 border-dashed flex flex-col items-center justify-center transition-all bg-white shadow-sm ${
              dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300 hover:border-slate-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Upload your photo</h3>
              <p className="text-slate-500 mb-8 max-w-sm mx-auto">Drag and drop your JPEG or PNG file here, or click to browse files.</p>
              
              <input 
                type="file" 
                id="file-upload" 
                className="hidden" 
                accept="image/*"
                onChange={handleChange}
              />
              <label 
                htmlFor="file-upload"
                className="cursor-pointer px-8 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
              >
                Select File
              </label>
              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full inline-flex">
                 <AlertCircle size={14} /> Tip: Works best with well-lit photos at eye level
              </div>
            </div>
          </div>
        )}

        {state === 'configure' && selectedImage && (
          <div className="relative w-full max-w-4xl h-full flex flex-col justify-center animate-fade-in">
             <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
                <img src={selectedImage} alt="Original" className="w-full h-auto object-contain max-h-[80vh]" />
                <button 
                  onClick={handleStartOver}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors"
                  title="Remove Image"
                >
                  <X size={20} />
                </button>
             </div>
             <p className="text-center mt-4 text-slate-500">Configure your settings on the left panel to begin.</p>
          </div>
        )}

        {state === 'processing' && (
           <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-8">
                 <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-indigo-600">
                    <Maximize2 size={32} className="animate-pulse"/>
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Designing your space...</h3>
              <p className="text-slate-500">Analyzing room geometry and lighting</p>
           </div>
        )}

        {state === 'result' && selectedImage && generatedImage && (
          <div className="w-full max-w-5xl h-full flex flex-col animate-fade-in">
            <div className="flex-grow flex items-center justify-center min-h-0 mb-6">
              <div className="relative w-full max-h-full aspect-video shadow-2xl rounded-2xl overflow-hidden bg-white">
                <BeforeAfterSlider 
                  beforeImage={selectedImage}
                  afterImage={generatedImage}
                  aspectRatio="h-full w-full"
                />
              </div>
            </div>
            
            {/* Action Bar */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 flex flex-wrap items-center justify-between gap-4">
               <div className="flex items-center gap-4">
                 <div className="hidden sm:block">
                   <p className="text-sm font-bold text-slate-900">{config.roomType} - {config.style}</p>
                   <p className="text-xs text-slate-500">{new Date().toLocaleDateString()}</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-3">
                 <button 
                   onClick={handleRegenerate}
                   disabled={regenerationsLeft === 0}
                   className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors disabled:opacity-50 text-sm font-medium"
                 >
                   <RefreshCw size={16} /> Regenerate ({regenerationsLeft})
                 </button>
                 <button 
                   onClick={handleStartOver}
                   className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors text-sm font-medium"
                 >
                   <Trash2 size={16} /> Delete
                 </button>
                 <button className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all text-sm font-bold">
                   <Download size={16} /> Download
                 </button>
               </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;