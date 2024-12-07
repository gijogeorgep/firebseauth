import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

function ProfilePage() {
  console.log(auth.currentUser);

  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const fetchUser = async () => {
    const user = auth.currentUser;
    const docRef = doc(db, "users", user?.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setName(docSnap.data().name);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user?.email);
        fetchUser();
      }
    });
  }, []);

  //   useEffect(() => {
  //     fetchUser();
  //   }, []);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>

      {/* Profile Card */}
      <div className="bg-red-400 rounded-lg w-[300px] h-[300px] flex flex-col justify-center items-center shadow-lg">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-lg text-blue-600 mb-2">{name}</h2>
          <p className="text-blue-600">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
