'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * A custom hook to manage state in localStorage with Next.js hydration safety.
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // Always start with initialValue to ensure server and client renders match initially.
  // This prevents hydration mismatches.
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Sync with localStorage only after the component has mounted (client-side only).
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  // Provide a stable setter function
  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      // Calculate the new value (handling functional updates like useState)
      setStoredValue((currentValue) => {
        const valueToStore = value instanceof Function ? value(currentValue) : value;
        
        // Save to local storage
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        
        return valueToStore;
      });
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
}
