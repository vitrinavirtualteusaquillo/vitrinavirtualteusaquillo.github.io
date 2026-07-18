async function optimizarImagen(
    archivo,
    {
        anchoMax = 1200,
        altoMax = 1200,
        calidad = 0.85
    } = {}
) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.onload = () => {

            const img = new Image();

            img.onload = () => {

                let { width, height } = img;

                if (width > anchoMax || height > altoMax) {

                    const escala = Math.min(
                        anchoMax / width,
                        altoMax / height
                    );

                    width *= escala;
                    height *= escala;

                }

                const canvas = document.createElement("canvas");

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d");

                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob(blob => {

                    if (!blob) {

                        reject("No fue posible optimizar la imagen");

                        return;

                    }

                    const archivoWebp = new File(
                        [blob],
                        archivo.name.replace(/\.[^/.]+$/, ".webp"),
                        {
                            type: "image/webp"
                        }
                    );

                    resolve(archivoWebp);

                }, "image/webp", calidad);

            };

            img.src = reader.result;

        };

        reader.onerror = reject;

        reader.readAsDataURL(archivo);

    });

}