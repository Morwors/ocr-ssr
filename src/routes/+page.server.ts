import Tesseract from "tesseract.js";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({cookies, request}) => {
        // TODO log the user in
        const data = await request.formData()
        const photo: File = data.get("photo")
        console.log("Got photo: ", photo)
        const buffer = Buffer.from(await photo.arrayBuffer())
        //index.js file
        const processedImage = await Tesseract.recognize(
            buffer,
            'eng',
            {logger: m => console.log(m)}
        );
        return {imageText: processedImage.data.text}


    }
};