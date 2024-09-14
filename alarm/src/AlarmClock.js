import React, { useState, useEffect, useRef } from "react";
import alarmSound from "./alarmSound.mp3"; // Ensure this path is correct

const AlarmClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState("");
  const [isRinging, setIsRinging] = useState(false);
  const audioRef = useRef(null);

  // Update the current time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Check if the current time matches the alarm time
  useEffect(() => {
    if (alarmTime && formatTime(currentTime) === alarmTime && !isRinging) {
      setIsRinging(true);
      playAlarmSound();
    }
  }, [currentTime, alarmTime, isRinging]);

  // Function to format the time to HH:MM
  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Play the alarm sound from a local file
  const playAlarmSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Stop the alarm sound
  const stopAlarm = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to the start
    }
    setIsRinging(false);
    setAlarmTime(""); // Clear the alarm time immediately
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Alarm Clock</h1>
      
      <div className="mb-4">
        <p className="text-2xl text-gray-700">Current Time: {formatTime(currentTime)}</p>
      </div>
      
      <div className="mb-6">
        <label htmlFor="alarm-time" className="block text-lg font-medium text-gray-700 mb-2">Set Alarm:</label>
        <input
          type="time"
          id="alarm-time"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {isRinging && (
        <div className="p-4 bg-red-100 rounded-lg">
          <p className="text-xl font-semibold text-red-600 mb-4">Wake up! It's {alarmTime}</p>
          <button
            onClick={stopAlarm}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Stop Alarm
          </button>
        </div>
      )}

      {/* Hidden audio element for playing the alarm sound */}
      <audio ref={audioRef} src={alarmSound} />
    </div>
  );
};

export default AlarmClock;
