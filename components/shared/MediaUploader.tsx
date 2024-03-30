import Image from "next/image";
import { useToast } from "../ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";
type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
};
const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();
  const onUploadSuccessHandler = (result: any) => {
    return toast({
      title: "Image uploaded successfully",
      description: "1 credit deducted",
      duration: 5000,
      className: "success-toast",
    });
  };
  const onUploadErrorHandler = () => {
    return toast({
      title: "Something went wrong while uploading",
      description: "please try again",
      duration: 5000,
      className: "error-toast",
    });
  };
  return (
    <CldUploadWidget
      uploadPreset="jsm_imagineAI"
      options={{ multiple: false, resourceType: "image" }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-500">Original</h3>
          {publicId ? (
            <>Here is image</>
          ) : (
            <div
              className="media-uploader_cta"
              onClick={() => {
                open();
              }}
            >
              <div className="media-uploader_cta-image">
                <Image
                  src="/assets/icons/add.svg"
                  alt="add image"
                  width={24}
                  height={24}
                />
              </div>
              <p className="p-14 medium">Click here to upload image</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
