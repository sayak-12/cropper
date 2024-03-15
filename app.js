document.addEventListener("DOMContentLoaded", function() {
    const fileInputs = document.querySelectorAll('.file-input');
    const saveBtn = document.querySelector('.save');
    const submitBtn = document.querySelector('.submit-btn');

    let croppedImages = [];
    let croppedCount = 0;

    fileInputs.forEach(function(input) {
        input.addEventListener('change', function(e) {
            const index = input.dataset.index;
            const result = document.querySelector('.result');
            const imgResult = document.querySelector('.img-result');
            const cropped = document.querySelector('.cropped');
            const download = document.querySelector('.download');

            if (e.target.files.length) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    if (e.target.result) {
                        let img = document.createElement('img');
                        img.id = 'image';
                        img.src = e.target.result;

                        result.innerHTML = '';
                        result.appendChild(img);

                        saveBtn.classList.remove('hide');

                        const aspectRatio = 1 / 1;
                        const cropper = new Cropper(img, {
                            aspectRatio: aspectRatio,
                            crop(event) {
                            },
                        });

                        saveBtn.addEventListener('click', function(e) {
                            e.preventDefault();
                            let imgSrc = cropper.getCroppedCanvas({
                            }).toDataURL();
                            document.querySelector('.cropper-container').style.display = "none";
                            croppedImages[index - 1] = imgSrc;
                            croppedCount++;

                            if (croppedCount === 3) {
                                submitBtn.disabled = false;
                            }

                            // Hide cropping compartment
                            cropped.classList.add('hide');
                            imgResult.classList.add('hide');
                        });
                    }
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    });

    submitBtn.addEventListener('click', function() {
        // Send croppedImages to submit.php
        // Example:
        // fetch('submit.php', {
        //     method: 'POST',
        //     body: JSON.stringify(croppedImages)
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
        console.log(croppedImages);
    });
});
