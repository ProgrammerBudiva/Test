<?php
/**
 * Created by PhpStorm.
 * User: andrey
 * Date: 10.07.17
 * Time: 13:49
 */
class ControllerPricespdfDrenazhresult extends Controller
{
    public function index()
    {
        require($_SERVER['DOCUMENT_ROOT'] . '/system/library/PDF/TESTPDF.php');
        require($_SERVER['DOCUMENT_ROOT'] . '/system/library/fpdi/fpdi.php');

        $pdf = new FPDI();

        $files = array("gen_prices/drenazh/drenazhmembrany.pdf", "gen_prices/drenazh/geotext.pdf",
            "gen_prices/drenazh/vodootvod.pdf");
        $pageCount = 0;



        foreach ($files AS $file) {
            // get the page count
            $pageCount = $pdf->setSourceFile($file);
            // iterate through all pages
            for ($pageNo = 1; $pageNo <= $pageCount; $pageNo++) {
                // import a page
                $templateId = $pdf->importPage($pageNo);
                // get the size of the imported page
                $size = $pdf->getTemplateSize($templateId);

                // create a page (landscape or portrait depending on the imported page size)
                if ($size['w'] > $size['h']) {
                    $pdf->AddPage('L', array($size['w'], $size['h']));
                } else {
                    $pdf->AddPage('P', array($size['w'], $size['h']));
                }

                // use the imported page
                $pdf->useTemplate($templateId);

//                $pdf->SetFont('Helvetica');
//                $pdf->SetXY(5, 5);
//                $pdf->Write(8, 'Generated by FPDI');
            }
        }



//        file_put_contents('test.pdf', $pdf->Output());
        $pdf->Output($_SERVER['DOCUMENT_ROOT'] .'prices/drenazhsystems.pdf', 'F');
    }
}