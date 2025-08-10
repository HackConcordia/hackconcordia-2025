"use client";

import React from "react";
import {
  toast as hotToast,
  Toaster,
  Toast,
  ToastOptions,
} from "react-hot-toast";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";

// Custom toast component with project theme
const CustomToastComponent = ({
  t,
  type,
  message,
}: {
  t: Toast;
  type: "success" | "error" | "info";
  message: string;
}) => {
  const getToastStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-yellow-400/95",
          text: "text-black",
          border: "border-yellow-500",
          icon: <FaCheckCircle className="text-green-700" />,
          shadow: "shadow-yellow-500/20",
        };
      case "error":
        return {
          bg: "bg-red-500/95",
          text: "text-white",
          border: "border-red-600",
          icon: <FaExclamationTriangle className="text-red-200" />,
          shadow: "shadow-red-500/20",
        };
      case "info":
        return {
          bg: "bg-white/95",
          text: "text-black",
          border: "border-gray-300",
          icon: <FaInfoCircle className="text-blue-600" />,
          shadow: "shadow-gray-500/20",
        };
      default:
        return {
          bg: "bg-white/95",
          text: "text-black",
          border: "border-gray-300",
          icon: <FaInfoCircle className="text-blue-600" />,
          shadow: "shadow-gray-500/20",
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div
      className={`${t.visible ? "animate-fade-in-3" : "animate-fade-out"}
        max-w-md w-full ${styles.bg} ${styles.text} backdrop-blur-sm rounded-lg pointer-events-auto 
        flex items-center ring-1 ring-black ring-opacity-5 ${styles.border} border-2 mb-2
        transform transition-all duration-300 ease-in-out hover:scale-105 ${styles.shadow}`}
      style={{
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">{styles.icon}</div>
          <div className="ml-3 flex-1">
            <p className={`text-sm font-medium ${styles.text}`}>{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200/30">
        <button
          onClick={() => hotToast.dismiss(t.id)}
          className={`w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium ${styles.text} hover:opacity-75 focus:outline-none transition-all duration-200 hover:bg-black/10`}
        >
          <FaTimes className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

// Custom toast functions
export const customToast = {
  success: (message: string, options?: Partial<ToastOptions>) => {
    return hotToast.custom(
      (t) => <CustomToastComponent t={t} type="success" message={message} />,
      {
        duration: 4000,
        ...options,
      }
    );
  },

  error: (message: string, options?: Partial<ToastOptions>) => {
    return hotToast.custom(
      (t) => <CustomToastComponent t={t} type="error" message={message} />,
      {
        duration: 5000,
        ...options,
      }
    );
  },

  info: (message: string, options?: Partial<ToastOptions>) => {
    return hotToast.custom(
      (t) => <CustomToastComponent t={t} type="info" message={message} />,
      {
        duration: 3000,
        ...options,
      }
    );
  },

  dismiss: (toastId?: string) => {
    return hotToast.dismiss(toastId);
  },
};

// Custom Toaster component with project styling
export const CustomToaster = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={true}
      gutter={12}
      containerClassName="z-50"
      containerStyle={{
        top: 20,
        left: 20,
        bottom: 20,
        right: 20,
      }}
      toastOptions={{
        duration: 4000,
        style: {
          background: "transparent",
          boxShadow: "none",
          padding: 0,
          margin: 0,
        },
      }}
    />
  );
};
