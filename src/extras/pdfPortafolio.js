import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generarPDFBlob = async (ref) => {
    const canvas = await html2canvas(ref.current, {
        scale: 1, // 🔥 reduce peso
        useCORS: true
    });

    // 🔥 usar JPEG en vez de PNG (mucho más liviano)
    const imgData = canvas.toDataURL("image/jpeg", 0.7);

    const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
        compress: true // 🔥 compresión activa
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);

    return pdf.output("blob");
};