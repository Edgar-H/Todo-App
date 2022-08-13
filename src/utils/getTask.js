import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.config';

export const getTask = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'todo'));
    const data = querySnapshot.docs.map((doc) => doc.data());
    if (data.length > 0) {
      return data;
    }
    return [];
  } catch (error) {
    return new Error(error);
  }
};
