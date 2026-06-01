document.getElementById('downloadBtn').onclick = () => {

    html2pdf()
    .from(document.getElementById('resume'))
    .set({
        margin: 0.3,
        filename: 'ZIL-E-HASNAIN-CV.pdf',

        image: {
            type: 'jpeg',
            quality: 1
        },

        html2canvas: {
            scale: 3
        },

        jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'portrait'
        }
    })
    .save();

};