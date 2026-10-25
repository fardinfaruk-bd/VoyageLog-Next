import AddPhotoForm from "@/components/Dashboard/AddPhotoForm";
import React from "react";

export default async function AddPhotoPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F2] text-[#1A1C19] p-6 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <AddPhotoForm />
      </div>
    </div>
  );
}