//Upload image
const uploadImage = document.querySelector('[upload-image]');
if(uploadImage){
    const inputFile = uploadImage.querySelector('[upload-image-input]');
    const previewImage = uploadImage.querySelector('[upload-image-preview]');
    
    inputFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = (event) => {
                previewImage.src = event.target.result;
            }
            reader.readAsDataURL(file);
        }else{
            previewImage.src = "";
        }
    })
}
//End Upload image

//Upload audio
const uploadAudio = document.querySelector('[upload-audio]');
if (uploadAudio) {
  const inputFile = uploadAudio.querySelector('[upload-audio-input]');
  const previewAudio = uploadAudio.querySelector('[upload-audio-preview]');
  const source = previewAudio.querySelector('source');

  inputFile.addEventListener('change', (e) => {
    if (e.target.files.length) {
      const audioURL = URL.createObjectURL(e.target.files[0]);
      source.src = audioURL;
      previewAudio.load(); // Gọi load() trên thẻ <audio>
    }
  });
}
//Edn upload audio