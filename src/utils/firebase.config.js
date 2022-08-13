// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCfFTpuufqUcDeodlVj1j4f83EKtlCsd_I',
  authDomain: 'practicas-d3973.firebaseapp.com',
  projectId: 'practicas-d3973',
  storageBucket: 'practicas-d3973.appspot.com',
  messagingSenderId: '881100346837',
  appId: '1:881100346837:web:d1d6d083aec1a4a1da595c',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
