"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, TextArea, Form, TextField, Label, Input } from "@heroui/react";
import {
  MapPin,
  Calendar,
  Lock,
  Globe,
  Upload,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Loader2,
  X,
} from "lucide-react";
import { createMemories } from "@/lib/action/memories";
import { useSession } from "@/lib/auth-client";

export default function AddPhotoForm() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    notes: "",
    visibility: "private"
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { data: session, isPending } = useSession();
  const user = session?.user;
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilesChange = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    if (selectedFiles.length + files.length > 5) {
      setError("You can upload a maximum of 5 images only.");
      return;
    }

    setError("");
    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setSelectedFiles((prev) => [...prev, ...files]);
    setPreviewUrls((prev) => [...prev, ...newPreviews]);

    setUploadingImages(true);
    try {
      const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
      if (!apiKey) {
        throw new Error("ImgBB API key is missing in environment variables.");
      }

      const uploadedLinks = [...imageUrls];

      for (const file of files) {
        const data = new FormData();
        data.append("image", file);

        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          {
            method: "POST",
            body: data,
          },
        );

        const result = await response.json();
        if (result.success) {
          uploadedLinks.push(result.data.url);
        } else {
          throw new Error(
            result.error?.message || "Failed to upload one or more images.",
          );
        }
      }

      setImageUrls(uploadedLinks);
    } catch (err) {
      setError(err.message);
      console.error("ImgBB upload error:", err);
    } finally {
      setUploadingImages(false);
    }
  };

  const handleRemoveImage = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (imageUrls.length === 0) {
      setError("Please upload at least one valid image.");
      return;
    }

    setIsLoading(true);

    try {
      const submissionPayload = {
        ...formData,
        imageUrls,
        userId: user?.id,
        userEmail: user?.email,
      };

      console.log("Submitting Expedition Log:", submissionPayload);
      const res = await createMemories(submissionPayload);
      if (!res?.success) {
        throw new Error("Failed to submit Expedition Log.");
      }

      setFormData({
        title: "",
        location: "",
        date: "",
        notes: "",
        visibility: "private",
      });

      previewUrls.forEach((url) => URL.revokeObjectURL(url));
      setSelectedFiles([]);
      setPreviewUrls([]);
      setImageUrls([]);

      setTimeout(() => {
        setIsLoading(false);
        setSuccess(true);
      }, 1000);
    } catch (err) {
      setError(err?.message || "An unexpected error occurred during submission.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="pb-6 border-b border-[#E2E8DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#B58B5D] uppercase mb-1">
            <span>Field Capture Unit</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58B5D]" />
            <span>Photographic Vault</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1C19]">
            Add New Photo & Expedition Entry
          </h1>
          <p className="text-sm text-[#555B52] mt-1">
            Upload up to 5 field photos via ImgBB, pin coordinates, and
            synthesize your journal.
          </p>
        </div>
        <Link href="/dashboard/user">
          <Button
            variant="bordered"
            className="border-[#DCE4D6] bg-white text-[#1A1C19] hover:bg-[#EAEFE6] font-medium px-4 py-2 rounded-xl text-xs shadow-xs"
          >
            Back to Overview
          </Button>
        </Link>
      </div>

      {success && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider">
              Entry Logged Successfully
            </p>
            <p className="text-xs text-emerald-700">
              Your images have been securely stored in your vault.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl text-xs font-medium">
          <span className="font-bold">Error:</span> {error}
        </div>
      )}

      <Form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E2E8DC] shadow-xs space-y-8 w-full block"
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold tracking-wider text-[#333831] uppercase">
              Field Photographs (Max 5){" "}
              <span className="text-amber-600">*</span>
            </label>
            <span className="text-[11px] text-[#737970]">
              {previewUrls.length}/5 uploaded
            </span>
          </div>

          <div className="relative border-2 border-dashed border-[#DCE4D6] hover:border-[#1C2821] transition-colors rounded-2xl bg-[#F9FBF7] p-6 text-center flex flex-col items-center justify-center cursor-pointer group overflow-hidden">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFilesChange}
              disabled={previewUrls.length >= 5}
              className="absolute inset-0 opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
            />

            <div className="space-y-2 pointer-events-none py-4">
              <div className="w-10 h-10 rounded-xl bg-[#EAEFE6] text-[#1C2821] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Upload className="w-4 h-4" />
              </div>
              <p className="text-xs font-medium text-[#1A1C19]">
                {previewUrls.length >= 5
                  ? "Maximum limit of 5 images reached"
                  : "Click or drop multiple high-res images here"}
              </p>
            </div>
          </div>

          {previewUrls.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4">
              {previewUrls.map((url, index) => (
                <div
                  key={index}
                  className="relative group h-24 rounded-xl overflow-hidden border border-[#E2E8DC] bg-gray-100"
                >
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {uploadingImages && (
            <div className="flex items-center gap-2 text-xs text-[#B58B5D] mt-2 font-medium">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Uploading images to ImgBB cloud...
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <TextField
            isRequired
            name="title"
            className="flex flex-col gap-1.5 w-full"
          >
            <Label className="text-xs font-bold tracking-wider text-[#333831] uppercase">
              Expedition Title
            </Label>
            <Input
              type="text"
              placeholder="e.g. Dawn at Lago di Braies"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-[#F9FBF7] border border-[#DCE4D6] rounded-xl px-3 py-2.5 text-sm focus:outline-none"
            />
          </TextField>

          <TextField
            isRequired
            name="location"
            className="flex flex-col gap-1.5 w-full"
          >
            <Label className="text-xs font-bold tracking-wider text-[#333831] uppercase">
              Location & Coordinates
            </Label>
            <div className="relative flex items-center">
              <MapPin className="absolute left-3 z-10 w-4 h-4 text-[#737970] pointer-events-none" />
              <Input
                type="text"
                placeholder="Prags Dolomites, Italy"
                value={formData.location}
                onChange={handleChange}
                className="w-full pl-9 bg-[#F9FBF7] border border-[#DCE4D6] rounded-xl px-3 py-2.5 text-sm focus:outline-none"
              />
            </div>
          </TextField>

          <TextField
            isRequired
            name="date"
            className="flex flex-col gap-1.5 w-full sm:col-span-2"
          >
            <Label className="text-xs font-bold tracking-wider text-[#333831] uppercase">
              Capture Timestamp
            </Label>
            <div className="relative flex items-center">
              <Calendar className="absolute left-3 z-10 w-4 h-4 text-[#737970] pointer-events-none" />
              <Input
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-9 bg-[#F9FBF7] border border-[#DCE4D6] rounded-xl px-3 py-2.5 text-sm focus:outline-none"
              />
            </div>
          </TextField>
        </div>

        <TextField isRequired className="flex flex-col gap-1.5">
          <Label className="block text-xs font-bold tracking-wider text-[#333831] uppercase">
            Field Observations & Notes
          </Label>
          <TextArea
            name="notes"
            placeholder="Record raw thoughts, weather conditions, camera settings..."
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            className="w-full bg-[#F9FBF7] border border-[#DCE4D6] rounded-xl p-3 text-sm focus:outline-none"
          />
        </TextField>

        <TextField isRequired className="space-y-3 pt-2">
          <Label className="block text-xs font-bold tracking-wider text-[#333831] uppercase">
            Archive Visibility & Privacy
          </Label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Label
              className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                formData.visibility === "private"
                  ? "bg-[#EAEFE6]/60 border-[#1C2821] shadow-xs"
                  : "bg-[#F9FBF7] border-[#DCE4D6] hover:border-gray-400"
              }`}
            >
              <Input
                type="radio"
                name="visibility"
                value="private"
                checked={formData.visibility === "private"}
                onChange={handleChange}
                className="mt-1 accent-[#1C2821]"
              />
              <div>
                <div className="flex items-center gap-1.5 font-serif font-bold text-sm text-[#1A1C19]">
                  <Lock className="w-3.5 h-3.5 text-[#B58B5D]" />
                  Private Archive
                </div>
                <p className="text-xs text-[#555B52] mt-0.5">
                  End-to-end encrypted. Visible exclusively to your personal
                  account.
                </p>
              </div>
            </Label>

            <Label
              className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                formData.visibility === "public"
                  ? "bg-[#EAEFE6]/60 border-[#1C2821] shadow-xs"
                  : "bg-[#F9FBF7] border-[#DCE4D6] hover:border-gray-400"
              }`}
            >
              <Input
                type="radio"
                name="visibility"
                value="public"
                checked={formData.visibility === "public"}
                onChange={handleChange}
                className="mt-1 accent-[#1C2821]"
              />
              <div>
                <div className="flex items-center gap-1.5 font-serif font-bold text-sm text-[#1A1C19]">
                  <Globe className="w-3.5 h-3.5 text-emerald-600" />
                  Public Dispatch
                </div>
                <p className="text-xs text-[#555B52] mt-0.5">
                  Share this expedition entry with fellow explorers in the
                  public community feed.
                </p>
              </div>
            </Label>
          </div>
        </TextField>

        <div className="bg-[#F4F7F2] p-4 rounded-2xl border border-[#E2E8DC] flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#B58B5D] shrink-0" />
          <p className="text-xs text-[#555B52]">
            <span className="font-bold text-[#1A1C19]">
              AI Narrative Engine:
            </span>{" "}
            VoyageLog will combine your ImgBB hosted photo links and field notes
            into a polished journal entry.
          </p>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#1C2821] text-white font-medium py-3.5 rounded-xl hover:bg-[#2C3B32] transition-all shadow-md flex items-center justify-center gap-2 text-base cursor-pointer"
          isLoading={isLoading || uploadingImages}
          isDisabled={isLoading || uploadingImages || imageUrls.length === 0}
        >
          Encrypt & Upload to Vault
          <ArrowRight className="w-4 h-4" />
        </Button>
      </Form>
    </div>
  );
}
