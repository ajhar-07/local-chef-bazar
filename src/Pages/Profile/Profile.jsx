import React from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";

const Profile = () => {
  const { user, loading } = useAuth();
  const [role, isReloading] = useRole();   // ← FIXED

  if (loading || isReloading) {
    return (
      <div className="flex justify-center pt-20">
        <p className="text-emerald-500 text-lg font-medium">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-emerald-500 mb-6">
        Profile Information
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6 border">
        <div className="flex items-center gap-6">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-emerald-500 object-cover"
          />
          <div>
            <h2 className="text-2xl font-medium">{user?.displayName}</h2>
            <p className="text-gray-500">{user?.email}</p>
            <p className="mt-1 inline-block px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-600">
              Status: Active
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-gray-500 text-sm">Name</p>
            <p className="font-medium">{user?.displayName}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-gray-500 text-sm">Role</p>
            <p className="font-medium">{role}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-medium break-all">{user?.email}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-gray-500 text-sm">Last Login</p>
            <p className="font-medium">
              {user?.metadata?.lastSignInTime
                ? new Date(user.metadata.lastSignInTime).toLocaleString()
                : "N/A"}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border md:col-span-2">
            <p className="text-gray-500 text-sm">Account Created</p>
            <p className="font-medium">
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
