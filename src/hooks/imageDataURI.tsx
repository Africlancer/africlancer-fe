const useApImageDataURI = (file: File, reqImageSize: number) => 
{
    if (file.type == 'image/jpeg' || file.type == 'image/png')
    {
        if(file.size < reqImageSize)
        {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve({ data: fileReader.result});
                };
            
                fileReader.onerror = (error) => {
                    reject({error});
                };
            });  
        }
        else
        {
            return { error: 'Maximum Image File Size is 600KB' }
        }
            
    }
    else
    {
        return { error: 'Please Select Image Files of JPG or PNG Only' }
    }
};

export default useApImageDataURI
