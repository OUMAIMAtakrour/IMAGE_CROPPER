export interface UploadedImage {
    id: string;
    url: string;
    name: string;
    size: number;
    uploadedAt: Date;
}
export interface SocialPlatform {
    id: string;
    name: string;
    displayName: string;
    aspectRatio: number;
    width: number;
    height: number;
    color: string;
    description?: string;
}
export interface CroppedImage {
    platform: SocialPlatform
    url: string;
    downloadUrl: string;
}
export interface ImageProcessorState {
    images: UploadedImage[];
    selectedImage: UploadedImage | null;
    croppedImages: CroppedImage[];
    selectedPlatforms: string[];
    isProcessing: boolean;
    error: string | null;
}
export interface PlatformFilter {
    category: string;
    platforms: SocialPlatform[];
}