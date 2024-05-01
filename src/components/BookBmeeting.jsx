import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fs from "fs";
import emailjs from "emailjs-com";

const BookAMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [SucessMess, setSucessMess] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const time = new Date(date.getTime());
    time.setHours(10, 0, 0, 0);
    setSelectedTime(time);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const isTimeAvailable = (time) => {
    const now = new Date();
    const timeDifference = time - now;
    return timeDifference >= 0 && timeDifference <= 48 * 60 * 60 * 1000;
  };

  const timeSlots = [
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "17:00", label: "5:00 PM" },
  ];

  const handleSubmit = () => {
    const templateParams = {
      name,
      email,
      contactNo,
      selectedDate: selectedDate.toLocaleString(),
      selectedTime: selectedTime.toLocaleString(),
    };

    emailjs
      .send(
        "service_2r26eqs",
        "template_k6jvxpk",
        templateParams,
        "xBWdO757Jl6TGRMWo",
      )
      .then(
        (response) => {
          const message =
            "Email sent successfully! Status: " +
            response.status +
            ", Message: " +
            response.text;
          // Update a state variable to show the message on the page
          setSucessMess(message);
          setContactNo("");
          setName("");
          setEmail("");
          setSelectedDate(new Date());
          setSelectedTime(null);
        },

        (error) => {
          console.error("Failed to send email:", error);
        },
      );
  };

  return (
    <div className="bg-white dark:bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-lg">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Book a Meeting
      </h2>
      <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
        Please select a date and time within the next 48 hours.
      </p>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            maxDate={new Date(Date.now() + 48 * 60 * 60 * 1000)}
            filterDate={(date) => {
              const time = new Date(date.getTime());
              time.setHours(10, 0, 0, 0);
              return isTimeAvailable(time);
            }}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="w-1/2">
          <select
            value={selectedTime || ""}
            onChange={(e) => handleTimeChange(new Date(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mt-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mt-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={contactNo}
        onChange={(e) => setContactNo(e.target.value)}
        className="w-full p-2 mt-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
      <button
        onClick={handleSubmit}
        disabled={!selectedTime || !name || !email || !contactNo}
        className={`w-full p-3 mt-6 text-white bg-purple-600 rounded-lg ${
          !selectedTime || !name || !email || !contactNo
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        Book Meeting
      </button>
      {SucessMess && <p>{SucessMess}</p>}
    </div>
  );
};

export default BookAMeeting;
