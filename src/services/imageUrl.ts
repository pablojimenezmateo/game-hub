import noImagePlaceholder from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
    /* This function returns the same image URL
    *  but appends the crop parameter
    */

    if (!url) return noImagePlaceholder;

    const target = "media/";

    // This should put the index after "media/"
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImageUrl;