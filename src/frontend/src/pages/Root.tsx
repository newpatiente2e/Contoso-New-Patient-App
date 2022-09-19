import useUserMedia from "../hooks/useUserMedia";
import { useCallback, useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiUpload } from "@mdi/js";
import { Button } from "../components/Button";
import CameraFeed from "../components/CameraFeed";
import { DragDropZone } from "../components/DragDropZone";
import FileToUpload from "../components/FileToUpload";

function Root() {
  const [cameraActive, setCameraActive] = useState(false);
  const [mediaStream, videoDimensions] = useUserMedia(cameraActive);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  useEffect(() => {
    if (fileToUpload) {
      setCameraActive(false);
    }
  }, [fileToUpload]);

  const uploadFile = useCallback(() => {
    console.log(`Uploading file: ${fileToUpload?.name}`);
  }, [fileToUpload]);

  return (
    <>
      <DragDropZone
        cameraActive={cameraActive}
        setCameraActiveState={setCameraActive}
        fileSelected={setFileToUpload}
      />
      <CameraFeed mediaStream={mediaStream} captureImage={setFileToUpload} />
      {fileToUpload && (
        <>
          <FileToUpload
            file={fileToUpload}
            width={videoDimensions?.width}
            height={videoDimensions?.height}
          />
          <Button onClick={uploadFile}>
            <>
              <Icon path={mdiUpload} size={1} />
            </>
          </Button>
        </>
      )}
    </>
  );
}

export default Root;
