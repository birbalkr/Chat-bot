import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import './App.css'
import { fetchChatResponse } from './service/api'
import Loading from './components/Loading'

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUserSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      //await
      const apiresponse = await fetchChatResponse(question)
      setResponse(apiresponse)
    } catch (error) {
      alert("Failed to get response: ", error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* HEADER */}
        <header className="bg-blue-700 h-20 flex items-center justify-center shadow-md">
          <h1 className="text-white text-2xl font-bold">Gemini ChatBot</h1>
        </header>

        {/* INPUT */}
        <ChatInput onSubmit={handleUserSubmit} />

        {/* LOADING */}
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loading />
          </div>
        )}

        {/* RESPONSE */}
        <ChatResponse response={response} />
      </div>


    </>
  )
}

export default App
