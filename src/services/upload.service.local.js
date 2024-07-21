export function loadImageFromInput(file, onImageReady) {
    const reader = new FileReader();
    reader.onload = function (event) {
        onImageReady(event.target.result);
    };
    reader.readAsDataURL(file);
}