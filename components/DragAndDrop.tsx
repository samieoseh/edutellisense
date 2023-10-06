import { ChangeEvent, DragEvent, useState } from "react";
import { Button } from "./ui/button";
import { useRef } from "react";

const DragAndDrop = ({
  onUpload,
}: {
  onUpload: (file: File | null) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [showHighlight, setShowHighlight] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setFile(file);
    }
  };

  const preventDefaultHandler = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div
        className={`w-[70%] h-64 md:h-96 mx-auto mt-16 border-2 rounded border-dashed flex flex-col space-y-2 items-center justify-center transition-all duration-150 ease-in-out ${
          showHighlight ? "border-primary bg-gray-50" : "border-gray-400"
        }`}
        onDragOver={(e) => {
          preventDefaultHandler(e);
          setShowHighlight(true);
        }}
        onDragLeave={(e) => {
          preventDefaultHandler(e);
          setShowHighlight(false);
        }}
        onDragEnter={(e) => {
          preventDefaultHandler(e);
          setShowHighlight(true);
        }}
        onDrop={(e) => {
          preventDefaultHandler(e);
          setShowHighlight(true);
          const file =
            Array.from(e.dataTransfer.files) &&
            Array.from(e.dataTransfer.files)[0];

          if (file) {
            setFile(file);
          }
        }}
      >
        <p className="text-sm md:text-xl flex flex-col items-center">
          Drag & drop to upload file
        </p>
        <p className="md:text-xl">OR</p>
        <p
          className="text-primary text-sm pl-1 md:text-xl"
          onClick={handleClick}
        >
          Browse
        </p>
        <p className="text-xs text-gray-400">{file?.name}</p>
        <input
          type="file"
          hidden={true}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
      <Button type="submit" onClick={() => onUpload(file)}>
        Upload
      </Button>
    </div>
  );
};

export default DragAndDrop;
