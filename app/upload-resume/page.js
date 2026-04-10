"use client";
import { useState } from "react";
import { UploadCloud, CheckCircle } from "lucide-react";

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setStatus("loading");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("password", password);

    const res = await fetch("/api/resume", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("success");
      setFile(null);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-foreground">
      <div className="glass-card w-full max-w-lg p-10 text-center">
        <h1 className="text-3xl font-bold mb-2">Upload Resume</h1>
        <p className="text-muted mb-8">Save your PDF directly to the database.</p>

        {status === "success" ? (
          <div className="flex flex-col items-center">
            <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
            <h2 className="text-xl font-bold">Upload Successful!</h2>
            <p className="text-muted mb-6">Your new resume is now live on the site.</p>
            <button onClick={() => setStatus("idle")} className="btn-outline">Upload Another</button>
          </div>
        ) : (
          <form onSubmit={handleUpload} className="flex flex-col gap-6">
            <label className="border-2 border-dashed border-card-border rounded-xl p-10 cursor-pointer hover:border-primary transition-colors flex flex-col items-center bg-background/50">
              <UploadCloud size={48} className="text-muted mb-4" />
              <span className="text-sm font-semibold text-slate-300">
                {file ? file.name : "Click to select PDF"}
              </span>
              <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
            </label>

            <input
              type="password"
              placeholder="Enter Admin Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0F172A] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />

            <button
              type="submit"
              disabled={!file || !password || status === "loading"}
              className="bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {status === "loading" ? "Uploading to DB..." : "Upload File"}
            </button>
            {status === "error" && <p className="text-red-500 text-sm">Failed to upload. Ensure password is correct.</p>}
          </form>
        )}
      </div>
    </div>
  );
}
